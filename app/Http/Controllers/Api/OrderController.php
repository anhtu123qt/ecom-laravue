<?php

namespace App\Http\Controllers\Api;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;

class OrderController extends Controller
{
    public function purchase(Request $request){
        $order = Order::create($request->all());
        return new OrderResource($order);
    }
    public function get_order(){
        return OrderResource::collection(Order::all());
    }
}
