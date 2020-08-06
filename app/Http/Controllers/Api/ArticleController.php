<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Article;
use \Firebase\JWT\JWT;
use Illuminate\Support\Facades\DB;

class ArticleController extends Controller
{
     function index(){
        $articles = Article::all();
        return $articles;
    }
    function detail($id){
    	$article = Article::find($id);
    	return $article;
    }
    function comment(Request $request) {
    	$user_id = $request->input('user_id');
        $article_id = $request->input('article_id');
        $name = $request->input('name');
        $email = $request->input('email');
        $content = $request->input('content');

        $key = "21A djfhsjhf sfddf";
        $data = JWT::decode($user_id,$key, array('HS256'));

         $userId = $data->user_id;
         echo $content;

        DB::table("comments")->insert([
                "user_id" => $userId,
                "article_id" => $article_id,
                "name" => $name,
                "email" => $email,
                "content" => $content
        ]);

        $responseData = array("data"=>null);
        return response()->json($responseData, 200);
    }
}
