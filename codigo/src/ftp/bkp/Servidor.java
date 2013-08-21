package ftp.bkp;

import java.io.*;
import java.net.*;

public class Servidor {

    public static void main(String[] args) {

        int i = 1;
        System.out.println("Servidor iniciado...");
        System.out.println("Aguardando conexões...\n");

        try {

            ServerSocket s = new ServerSocket(100);

            for (;;) {

                Socket incoming = s.accept();
                System.out.println("Novo cliente conectado, (" + i
                        + ") - " + incoming.getInetAddress().getHostName());

                Thread t = new ThreadedServer(incoming, i);
                t.start();
                i++;
            }

        } catch (Exception e) {
            System.out.println("Erro: " + e);
        }
    }
}

class ThreadedServer extends Thread {

    int n;
    String c, fn, fc;
    String filenm;
    Socket incoming;
    int counter;
    String dirn = "C:/Users/Djam/Desktop/servidor/";

    public ThreadedServer(Socket i, int c) {
        incoming = i;
        counter = c;
    }

    public void run() {
        try {

            BufferedReader in = new BufferedReader(new InputStreamReader(incoming.getInputStream()));
            PrintWriter out = new PrintWriter(incoming.getOutputStream(), true);
            OutputStream output = incoming.getOutputStream();
            fn = in.readLine();
            c = fn.substring(0, 1);

            if (c.equals("#")) {
                n = fn.lastIndexOf("#");
                filenm = fn.substring(1, n);
                FileInputStream fis = null;
                boolean filexists = true;
                System.out.println(incoming.getInetAddress().getHostName() + " - Requisitou o download do arquivo <" + dirn + filenm + ">");
                try {
                    fis = new FileInputStream(dirn + filenm);
                } catch (FileNotFoundException exc) {
                    filexists = false;
                    System.out.println("FileNotFoundException:" + exc.getMessage());
                }
                if (filexists) {
                    sendBytes(fis, output);
                    fis.close();
                    System.out.println("Arquivo enviado com sucesso.");
                }

            } else {
                try {
                    boolean done = true;
                    System.out.println(incoming.getInetAddress().getHostName() + " - Requisitou o envio do arquivo <" + fn);

                    File dir = new File(dirn);
                    if (!dir.exists()) {
                        dir.mkdir();
                    } else {
                    }
                    File f = new File(dir, fn);
                    FileOutputStream fos = new FileOutputStream(f);
                    DataOutputStream dops = new DataOutputStream(fos);

                    while (done) {
                        fc = in.readLine();
                        if (fc == null) {
                            done = false;
                        } else {
                            dops.writeBytes(fc);
                            // System.out.println(fc);

                        }
                    }
                    fos.close();
                } catch (Exception ecc) {
                    System.out.println(ecc.getMessage());
                }
            }
            incoming.close();
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
    }

    private static void sendBytes(FileInputStream f, OutputStream op)
            throws Exception {
        byte[] buffer = new byte[1024];
        int bytes = 0;

        while ((bytes = f.read(buffer)) != -1) {
            op.write(buffer, 0, bytes);
        }
    }
}