const meta = [
	{
		metakey: 'name',
		metavalue: 'Edwin'
	},
	{
		metakey: 'address',
		metavalue: 'jln ABC'
	},
	{
		metakey: 'phone',
		metavalue: '30259732059'
	},
	{
		metakey: 'email',
		metavalue: 'a@a.com'
	},
	{
		metakey: 'city',
		metavalue: 'Jakarta'
	}
]

function convertMetaToUser(meta){
    //TULIS LOGIC DISINI
    let user = {}
    for(let i = 0; i < meta.length; i++){
       user[meta[i].metakey] = meta[i].metavalue
    } 
    
    return user
     
};
const user = convertMetaToUser(meta);
console.log(user);



/*
EXPECTED OUTPUT 
//Ubah struktur object "meta" menjadi seperti "user" dengan for loop sehingga menjadi seperti contoh di contoh bawah
{
	name:	'Edwin',
	address:'jln ABC',
	phone:	'30259732059',
	email:	'a@a.com',
	city:	'Jakarta'
}
*/