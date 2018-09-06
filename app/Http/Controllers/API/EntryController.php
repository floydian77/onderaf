<?php

namespace App\Http\Controllers\API;

use App\Entry;
use App\Layout;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class EntryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Response $response)
    {
        return response(Entry::all()->jsonSerialize(), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $entry = new Entry();
        $entry->layout = $request->layout;
        $entry->data = $request->data;
        $entry->initiative = $request->initiative;
        $entry->save();
      
        return response($entry, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Entry  $entry
     * @return \Illuminate\Http\Response
     */
    public function show(Entry $entry)
    {
        return $entry;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Entry  $entry
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Entry $entry)
    {
        // $test = Layout::findOrFail($request->Layout);
        // $entry->_layout = $request->Layout;
        $entry->layout = $request->layout;
        $entry->initiative = $request->initiative;
        $entry->data = $request->data;
        $entry->save();

        return response($entry, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Entry  $entry
     * @return \Illuminate\Http\Response
     */
    public function destroy(Entry $entry)
    {
        $entry->delete();

        return response(null, Response::HTTP_OK);
    }
}
