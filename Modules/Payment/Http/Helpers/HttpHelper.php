<?php
namespace Modules\Payment\Http\Helpers;

trait HttpHelper
{

    private $timeout=30;
      private $response=['status'=>true,'message'=>'','data'=>[]];

    public function post($uri ,$data){

      $httpClient = new \GuzzleHttp\Client();

      try{
            $response = $httpClient->request('POST', $uri, [
            'headers' => [
                  'Content-Type' => 'application/json',
            ],
            'body' => json_encode($data),
             "connect_timeout"=>$this->timeout, 'timeout'=>$this->timeout
            ]);

            $this->response['data']=$response->getBody()->getContents();
      }
      catch(\Exception $e){

            $this->response['status']=false;
            $this->response['message']=$e->getMessage();

      }
      return $this->response;


    }

}
