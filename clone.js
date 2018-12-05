    path = new File("C:/Users/s1663550");

    files[] = path.listFiles();
    for (int i = 0; i < files.length; i++){
        if (files[i].isFile()){ //this line weeds out other directories/folders
            System.out.println(files[i]);
        }
    }
