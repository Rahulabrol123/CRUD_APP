<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');


require APPPATH . '/libraries/REST_Controller.php';
class controller extends REST_Controller
{
    public function __construct(){
        parent::__construct();
        $this->load->model('model');
    }

    public function blogs_get(){
        $data= $this->model->Blogs();
        $this->response($data);
    }

    public function blogPost_post(){
        $data = array('title' => $this->post('title'), 
        'description' => $this->post('description'), 
        'category' => $this->post('category'));
     
        if ($this->model->insert($data)) {
           return "data posted";
        } else {
           return "cannot post data, try again";
        }
    }

    public function blogDelete_get($id = null)
    {
        $delete = $this->model->delete($id);
        if ($delete) 
           return "blog deleted";
         else 
            return "cannot delete blog,try again";
        
    }

    public function blogUpdate_post($id=null){
        $data = array('title' => $this->post('title'),
        'description' => $this->post('description'),
        'category' => $this->post('category')
        );
         $r = $this->model->update($id,$data);
            $this->response($r); 
    }





}