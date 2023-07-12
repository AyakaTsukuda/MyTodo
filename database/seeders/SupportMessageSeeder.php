<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SupportMessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("support_messages")->insert([
            [ // seed
                "mark_id" => 1, 
                "message" => "リストを作ろうとしたその心意気に尊敬！",
                "created_at" => now()
            ],
            [
                "mark_id" => 1, 
                "message" => "書き出してみたら大した事ないって？さっすが！",
                "created_at" => now()
            ],
            [
                "mark_id" => 1, 
                "message" => "やる事分かっちゃえばゴールはもう目の前だね！",
                "created_at" => now()
            ],
            [
                "mark_id" => 1, 
                "message" => "リストを作れるだなんて...。お主、よう、やりよりますなぁ。",
                "created_at" => now()
            ],
            [
                "mark_id" => 1, 
                "message" => "リスト化できただって！？えらい、偉すぎる...。",
                "created_at" => now()
            ],
            [ // sprout
                "mark_id" => 2, 
                "message" => "え、もう手を付けたの！？早い、はやすぎる！！",
                "created_at" => now()
            ],
            [
                "mark_id" => 2, 
                "message" => "まって、順調すぎてちょー泣ける！",
                "created_at" => now()
            ],
            [
                "mark_id" => 2, 
                "message" => "進んでますねぇ...。あなた様ならやって下さると信じております。",
                "created_at" => now()
            ],
            [
                "mark_id" => 2, 
                "message" => "こっ...こなせているだと！？お主、天才か！",
                "created_at" => now()
            ],
            [
                "mark_id" => 2, 
                "message" => "最初の一歩がちょー大事！",
                "created_at" => now()
            ],
            [ // leaf
                "mark_id" => 3, 
                "message" => "もうほぼ半分できてるじゃん...。なんてこった。",
                "created_at" => now()
            ],
            [
                "mark_id" => 3, 
                "message" => "ここまでこれたなんて...。あなた本当に人間！？",
                "created_at" => now()
            ],
            [
                "mark_id" => 3, 
                "message" => "すごいよ...。ちゃんとやれてるよ。神じゃん！",
                "created_at" => now()
            ],
            [
                "mark_id" => 3, 
                "message" => "ここまで大変だったでしょう？もう少しよ、頑張りなさい！",
                "created_at" => now()
            ],
            [
                "mark_id" => 3, 
                "message" => "よっしゃ、折り返し地点突入！",
                "created_at" => now()
            ],
            [ // tree
                "mark_id" => 4, 
                "message" => "すごい、ゴールが見えてきたー！",
                "created_at" => now()
            ],
            [
                "mark_id" => 4, 
                "message" => "後ちょっと、頑張って！",
                "created_at" => now()
            ],
            [
                "mark_id" => 4, 
                "message" => "まさかこれほどとは...。恐れ入ります。",
                "created_at" => now()
            ],
            [
                "mark_id" => 4, 
                "message" => "完了間近ですと...！？もう神の域に突入ですね！",
                "created_at" => now()
            ],
            [
                "mark_id" => 4, 
                "message" => "こんなにやれているのに、まだなお手を止めないなんて...。天才、恐るべし！",
                "created_at" => now()
            ],
            [ // fruit
                "mark_id" => 5, 
                "message" => "わーあと少し。がんばれーー！！！",
                "created_at" => now()
            ],
            [
                "mark_id" => 5, 
                "message" => "ここまで来れた貴方こそ、真の天才と呼ぶのに相応しいお方です！",
                "created_at" => now()
            ],
            [
                "mark_id" => 5, 
                "message" => "えっちょっすごすぎるんだけど...！？もう終わるじゃん！",
                "created_at" => now()
            ],
            [
                "mark_id" => 5, 
                "message" => "今まで本当に良く頑張りましたね！",
                "created_at" => now()
            ],
            [
                "mark_id" => 5, 
                "message" => "ラストスパートじゃぁああああああ！！！！",
                "created_at" => now()
            ],
            [ // crown
                "mark_id" => 6, 
                "message" => "Congratulations!!",
                "created_at" => now()
            ],
        ]);
    }
}
