package ftp;

import java.io.*;
import java.net.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Servidor {

    public static void main(String[] args) {

        int i = 1;
        //   System.out.println("Servidor iniciado...");
        // System.out.println("Aguardando conexões...\n");

        try {

            ServerSocket s = new ServerSocket(80);

            for (;;) {

                Socket incoming = s.accept();
                //System.out.println("Novo cliente conectado, (" + i + ") - " + incoming.getInetAddress().getHostName());

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
    String nomeArquivo;
    Socket conexao;
    int qtdeConexoes;
    String nomeDiretorio = "G:/faculdade/redes-2/hidenove-apache/redes2FTP/src/files/servidor";

    public ThreadedServer(Socket i, int c) {
        conexao = i;
        qtdeConexoes = c;
    }

    public void run() {
        try {

            BufferedReader in = new BufferedReader(new InputStreamReader(conexao.getInputStream()));
            PrintWriter out = new PrintWriter(conexao.getOutputStream(), true);
            OutputStream output = conexao.getOutputStream();


            String requisicao = in.readLine();
            System.out.println(requisicao);
            String[] requisicaoHTTP = new String[2];
            requisicaoHTTP = requisicao.split(" ");

            if (requisicaoHTTP[0].equals("POST")) {
                gravarArquivo(requisicaoHTTP[1], in);

            } else {
                // entao e uma requisicao do broswer para exibir no mesmo

                if (requisicaoHTTP[0].equals("GET")) {
                    nomeArquivo = nomeDiretorio + requisicaoHTTP[1];
                    FileInputStream fis = null;
                    boolean filexists = true;
                    System.out.println(conexao.getInetAddress().getHostName() + " - GET <" + nomeArquivo + ">");

                    try {
                        if (nomeArquivo.substring(nomeArquivo.length() - 1).equals("/")) {
                            sendBytes(nomeArquivo.substring(0, nomeArquivo.length() - 1), output);
                            fis.close();

                        } else {
                            // e uma pasta, listar arquivos
                            fis = new FileInputStream(nomeArquivo);
                            sendBytes(fis, output);
                            fis.close();
                        }

                        //System.out.println("Arquivo enviado com sucesso.");
                    } catch (FileNotFoundException exc) {
                        filexists = false;
                        System.out.println("Erro 404, arquivo não encontrado:" + exc.getMessage());
                    } finally {
                        conexao.close();
                    }
                }
            }


        } catch (Exception e) {
            //System.out.println("Error: " + e);
        }

    }

    private static void sendBytes(FileInputStream f, OutputStream op) throws Exception {
        byte[] buffer = new byte[1024];
        int bytes = 0;

        while ((bytes = f.read(buffer)) != -1) {
            op.write(buffer, 0, bytes);
        }
    }

    public static void sendBytes(String f, OutputStream op) throws Exception {

        byte[] buffer = new byte[2048];
        buffer = listaArquivos(f).getBytes("ISO-8859-1");
        op.write(buffer);

    }

    public static String listaArquivos(String caminho) {

        File diretorio = new File(caminho);
        File fList[] = diretorio.listFiles();
        String lista = "";

        lista = lista + "<a href=\"../\">../</a><br />";

        for (int i = 0; i < fList.length; i++) {
            if (!fList[i].isDirectory()) {
                lista = lista + "<a href=\"" + fList[i].getName() + "\">" + fList[i].getName() + "</a><br />";
            } else {
                lista = lista + "<a href=\"" + fList[i].getName() + "/\">" + fList[i].getName() + "/</a><br />";
            }
        }
        return lista;

    }

    public void gravarArquivo(String nomeArquivo, BufferedReader entrada) {
        File file = new File(nomeDiretorio + "testeupload.txt");
        boolean exist;
        String linha;

        try {

            FileWriter fstream = new FileWriter("D:/Salve Aqui/testeupload.txt", true);
            BufferedWriter out = new BufferedWriter(fstream);
            while((linha = entrada.readLine()) != null){
                out.write(linha);
                System.out.println(linha);
            }
            out.close();

            System.out.println("File created successfully.");

        } catch (IOException ex) {
            Logger.getLogger(ThreadedServer.class.getName()).log(Level.SEVERE, null, ex);
        }


    }
}
