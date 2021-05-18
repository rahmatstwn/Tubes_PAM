<?php
error_reporting(0);

$host = "localhost";
$user = "root";
$pass = "root";
$db   = "users";

$koneksi = mysqli_connect($host, $user, $pass, $db);

$op = $_GET['op'];
switch ($op) {
  case '':
    normal();
    break;
  default:
    normal();
    break;
  case 'create':
    create();
    break;
  case 'detail':
    detail();
    break;
  case 'login':
    login();
    break;
}

function normal()
{
  global $koneksi;
  $sql1 = "select * from user order by id desc";
  $q1 = mysqli_query($koneksi, $sql1);
  while ($r1 = mysqli_fetch_array($q1)) {
    $hasil[] = array(
      'id' => $r1['id'],
      'username' => $r1['username'],
      'password' => $r1['password']
    );
  }
  $data['data']['result'] = $hasil;
  echo json_encode($data);
}

function create(){
    global $koneksi;
    $username = $_POST['username'];
    $password = $_POST['password'];
    $hasil = "Gagal dimasukkan data";
    if($username and $password){
        $sql1 = "insert into user(username,password) values ('$username','$password')";
        $q1 = mysqli_query($koneksi,$sql1);
        if($q1){
            $hasil = "Berhasil menambahkan data";
        }
    }
    $data['data']['result'] = $hasil;
    echo json_encode($data);
}

/*function detail()
{
  global $koneksi;
  $id = $_GET['id'];
  $sql1 = "select * from user where id = '$id'";
  $q1 = mysqli_query($koneksi, $sql1);
  while ($r1 = mysqli_fetch_array($q1)) {
    $hasil[] = array(
      'id' => $r1['id'],
      'user' => $r1['username'],
      'npassword' => $r1['password'],
    );
  }
  $data['data']['result'] = $hasil;
  echo json_encode($data);
}*/

function login()
{
  global $koneksi;
  $username = $_GET['username'];
  $password = $_GET['password'];
  $sql1 = "select username, password from user ";
  $q1 = mysqli_query($koneksi, $sql1);
  if ($q1) {
    $hasil = "Berhasil Login";
  } else {
    $hasil = "Gagal Login";
  }
  $data['data']['result'] = $hasil;
  echo json_encode($data);
}