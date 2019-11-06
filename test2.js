const categories = [
	{ id : 1, name : 'Sport'},
	{ id : 2, name : 'Food'}
];
const news = [
	{ id : 1, title : 'UEFA League Champion', 	category : 1},
	{ id : 2, title : 'Juara Piala Sudirman', 	category : 1},
	{ id : 3, title : 'Final F1', 				category : 1},
	{ id : 4, title : 'Cara memasak Kue', 		category : 2},
	{ id : 5, title : '10 Restoran enak', 		category : 2}
];


function convertMetaToUser(categories, news){
    //TULIS LOGIC DISINI
    let result = {}
    for(let i = 0; i < categories.length; i++){
        result[categories[i].name] = []
        for(let j = 0; j < news.length; j++){
            result[categories[i].name].push(news[j])
        }
    }

    console.log(result);
       
};
const user = convertMetaToUser(categories, news);


/*
EXPECTED OUTPUT 
//Ubah struktur object "categories" & "news" menjadi seperti "summary" dengan for loop sehingga menjadi seperti contoh di contoh bawah
{
	Sport : [
		{id : 1, title : 'UEFA League Champion', 	category : 1},
		{id : 2, title : 'Juara Piala Sudirman', 	category : 1},
		{id : 3, title : 'Final F1', 				category : 1]
	],
	Food : [
		{id : 4, title : 'Cara memasak Kue', 		category : 2},
		{id : 5, title : '10 Restoran enak', 		category : 2}
	]
}
*/