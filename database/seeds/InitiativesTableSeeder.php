<?php

use Illuminate\Database\Seeder;

class InitiativesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('initiatives')->insert([
            ['name' => 'Boompje planten!?'],
            ['name' => 'Straat maken'],
            ['name' => 'Sociale activiteiten'],
            ['name' => 'Jeau de boules']
        ]);
    }
}
