<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Product;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class ProductsController extends Controller
{
    public function index(){
    	return Product::All();
    }
}
