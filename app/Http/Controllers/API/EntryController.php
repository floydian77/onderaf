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
        $entries = Entry::all();

        // add pivot data
        foreach($entries as $entry) {
            $entry->categories = $entry->categories;
        }

        return response($entries->jsonSerialize(), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $entry = new Entry();
        // $entry->layout = $request->layout;
        // $entry->data = $request->data;
        // $entry->save();

        $ids = [];

        foreach ($request->categories as $category) {
            array_push($ids, intval($category['id']));
        }

        $entry = new Entry();
        $entry->layout = $request->layout;
        $entry->data = $request->data;
        $entry->status = $request->status;
        $entry->save();
        $entry->categories()->sync($ids);

        return response($entry, Response::HTTP_OK);
      
        // return response($entry, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Entry  $entry
     * @return \Illuminate\Http\Response
     */
    public function show(Entry $entry)
    {
        // add pivot data
        $entry->categories = $entry->categories;
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
        $ids = [];

        foreach ($request->categories as $category) {
            array_push($ids, intval($category['id']));
        }

        $entry->layout = $request->layout;
        $entry->categories()->sync($ids);
        $entry->data = $request->data;
        $entry->status = $request->status;
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

    /**
     * Show associated categories
     *
     * @param  \App\Entry  $entry
     * @return \Illuminate\Http\Response
     */
    // public function categories($id)
    // {
    //     // $entry->delete();

    //     // return response($entry->initiative->categories, Response::HTTP_OK);
    //     // return response($entry, Response::HTTP_OK);
        
    //     return \App\Entry::find($id)->initiative();
    // }

}
