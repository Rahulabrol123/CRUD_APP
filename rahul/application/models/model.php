<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

class model extends CI_Model{



 public function __construct(){
     parent::__construct();
     $this->load->database();
     $this->tbl='cryptonews';
     
 }

 public function Blogs(){

    $blog=$this->db->query("select * from cryptonews");
    return $blog->result_array();
 }

 public function insert($blog){
  $data=$this->db->insert($this->tbl,$blog);
  return $data;
 }

 public function delete($id){
  
    $dlt = $this->db->query("delete from `cryptonews` where id = $id");
 
     return $dlt;
}

public function update($id,$data){
   
    $this->title    = $data['title']; 
     $this->description  = $data['description'];
     $this->category = $data['category'];
     $result = $this->db->update($this->tbl,$data,array('id' => $id));
     if($result)
     {
         return "Data is updated successfully";
     }
     else
     {
         return "Error has occurred";
     }
 }

}