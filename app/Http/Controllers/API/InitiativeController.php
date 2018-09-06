<?php

namespace App\Http\Controllers\API;

use App\Initiative;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class InitiativeController extends Controller
{
    // front-end; receive creation form data
        // input types, default values
    // back-end; show initiative data


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(Initiative::all()->jsonSerialize(), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $initiative = new Initiative();
        $initiative->name = $request->name;
        $initiative->save();
      
        return response($initiative, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Initiative  $initiative
     * @return \Illuminate\Http\Response
     */
    public function show(Initiative $initiative)
    {
        return $initiative;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Initiative  $initiative
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Initiative $initiative)
    {
        $initiative->name = $request->name;
        $initiative->save();

        return response($initiative, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Initiative  $initiative
     * @return \Illuminate\Http\Response
     */
    public function destroy(Initiative $initiative)
    {
        $initiative->delete();

        return response(null, Response::HTTP_OK);
    }
}
