// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

// Arabanız eski, kolay bozuluyor. Amortisörler gitti ve tamamen ölmeden önce yaklaşık 15 darbe daha kaldırabileceğini düşünüyorsunuz.

// Ne yazık ki sizin için sürüşünüz çok inişli çıkışlı! Düz bir yol ("_") veya tümsekler ("n") gösteren bir dize verildiğinde, eve güvenli bir şekilde varıp varmayacağınıza çalışın. 15 veya daha az tümsek, "Woohoo!" döndürür, 15'ten fazla tümsek "Car Dead" döndürür.

// Samples:
// bump("_nnnnnnn_n__n______nn__nn_nnn") => "Car Dead"
// bump("______n___n_") => "Woohoo!"


//! solution of the problem

// function bump(str){
//     let car =str.split("").filter(a => a == "n");
//     return car.length <= 15 ? "Woohoo!" : "Car Dead";
// }