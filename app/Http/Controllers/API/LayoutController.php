<?php

namespace App\Http\Controllers\API;

use App\Layout;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class LayoutController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Response $response)
    {
        return response(Layout::all()->jsonSerialize(), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $layout = new Layout();
        $layout->name = $request->name;
        $layout->type = $request->type;
        $layout->data = $request->data;
        $layout->save();
      
        return response($layout, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Layout  $Layout
     * @return \Illuminate\Http\Response
     */
    public function show(Layout $layout)
    {
        return $layout;
    }
    public function showOptions()
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Layout  $layout
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Layout $layout)
    {
        $layout->name = $request->name;
        $layout->type = $request->type;
        $layout->data = $request->data;
        $layout->save();

        return response($layout, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Layout  $layout
     * @return \Illuminate\Http\Response
     */
    public function destroy(Layout $layout)
    {
        $layout->delete();

        return response(null, Response::HTTP_OK);
    }
}
