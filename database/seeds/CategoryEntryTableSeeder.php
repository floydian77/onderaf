<?php

use Illuminate\Database\Seeder;

class CategoryEntryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category_entry')->insert([
            ['category_id' => 1, 'entry_id' => 2],
            ['category_id' => 2, 'entry_id' => 2],
            ['category_id' => 1, 'entry_id' => 3],
            ['category_id' => 1, 'entry_id' => 4],
            ['category_id' => 1, 'entry_id' => 6],
            ['category_id' => 1, 'entry_id' => 8],
            ['category_id' => 1, 'entry_id' => 9],
            ['category_id' => 2, 'entry_id' => 10],
            ['category_id' => 2, 'entry_id' => 7],
            ['category_id' => 2, 'entry_id' => 11],
            ['category_id' => 2, 'entry_id' => 12],
            ['category_id' => 2, 'entry_id' => 1],
            ['category_id' => 1, 'entry_id' => 1],
            ['category_id' => 2, 'entry_id' => 13],
            ['category_id' => 2, 'entry_id' => 14],
            ['category_id' => 2, 'entry_id' => 15],
            ['category_id' => 2, 'entry_id' => 16],
            ['category_id' => 1, 'entry_id' => 17],
            ['category_id' => 2, 'entry_id' => 18],
            ['category_id' => 2, 'entry_id' => 19],
            ['category_id' => 1, 'entry_id' => 20],
            ['category_id' => 2, 'entry_id' => 23]
        ]);
    }
}
