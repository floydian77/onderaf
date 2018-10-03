<?php

use Illuminate\Database\Seeder;

class CategoryInitiativeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category_initiative')->insert([
            ['category_id' => 1, 'initiative_id' => 1],
            ['category_id' => 2, 'initiative_id' => 1],
            ['category_id' => 1, 'initiative_id' => 2],
            ['category_id' => 2, 'initiative_id' => 2]
        ]);
    }
}
