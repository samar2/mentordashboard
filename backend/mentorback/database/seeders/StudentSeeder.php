<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Student;
use Illuminate\Support\Str;

class StudentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i=0;$i<10;$i++){
        Student::create([
            'name' => Str::random(10),
            'email' => Str::random(10).'@gmail.com',
        ]);
        }
        //
       
    }
}
