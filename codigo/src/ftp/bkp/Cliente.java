package ftp.bkp;

import java.net.*;
import java.io.*;
import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

class Cliente extends JFrame implements ActionListener {

    String fn, nomeArquivo;
    String fc;
    String pastaUsuario = "C:/Users/Djam/Desktop/cliente/";
    Socket socket;
    InputStreamReader inputStream;
    OutputStream outputSteram;
    BufferedReader bufferedReader;
    PrintWriter printWriter;
    JPanel pnl;
    JLabel lbltle, lblud;
    Font fnt;
    JTextField txtfn;
    JButton btnu, btnd;

    public Cliente() {
        super("FTP CLIENT");

        pnl = new JPanel(null);

        fnt = new Font("Times New Roman", Font.BOLD, 25);

        lbltle = new JLabel("FTP CLIENT");
        lbltle.setFont(fnt);
        lbltle.setBounds(225, 35, 200, 30);
        pnl.add(lbltle);

        lblud = new JLabel("ENTER  FILE-NAME :");
        lblud.setBounds(100, 100, 150, 35);
        pnl.add(lblud);

        txtfn = new JTextField();
        txtfn.setBounds(300, 100, 200, 25);
        pnl.add(txtfn);

        btnu = new JButton("UPLOAD");
        btnu.setBounds(150, 200, 120, 35);
        pnl.add(btnu);


        btnd = new JButton("DOWNLOAD");
        btnd.setBounds(320, 200, 120, 35);

        pnl.add(btnd);

        btnu.addActionListener(this);
        btnd.addActionListener(this);
        getContentPane().add(pnl);

        try {
            socket = new Socket("localhost", 100);
            bufferedReader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            printWriter = new PrintWriter(socket.getOutputStream(), true);
            outputSteram = socket.getOutputStream();
        } catch (Exception e) {
            System.out.println("ExCEPTION :" + e.getMessage());
        }
    }

    public void actionPerformed(ActionEvent e) {
        if (e.getSource() == btnu) {
            try {
                nomeArquivo = txtfn.getText();
                printWriter.println(nomeArquivo);
                FileInputStream fis = new FileInputStream(pastaUsuario + nomeArquivo);
                byte[] buffer = new byte[1024];
                int bytes = 0;

                while ((bytes = fis.read(buffer)) != -1) {
                    outputSteram.write(buffer, 0, bytes);
                }
                fis.close();
            } catch (Exception exx) {
                System.out.println(exx.getMessage());
            }
        }

        if (e.getSource() == btnd) {
            try {
                File dir = new File(pastaUsuario);
                if (!dir.exists()) {
                    dir.mkdir();
                } else {
                }

                boolean done = true;
                nomeArquivo = txtfn.getText();
                fn = new String("#" + nomeArquivo + "#");
                System.out.println(nomeArquivo);
                printWriter.println(fn);
                File f = new File(dir, nomeArquivo);
                FileOutputStream fos = new FileOutputStream(f);
                DataOutputStream dops = new DataOutputStream(fos);
                while (done) {
                    fc = bufferedReader.readLine();
                    if (fc == null) {
                        done = false;
                    } else {
                        dops.writeBytes(fc);
                        System.out.println(fc);

                    }
                }
                fos.close();
            } catch (Exception exx) {
            }

        }
    }

    public static void main(String args[]) {
        Cliente ftpc = new Cliente();
        ftpc.setSize(600, 300);
        ftpc.show();
    }
}