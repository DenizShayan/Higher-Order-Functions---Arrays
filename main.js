const companies=[
    {name: "Company One",category:"Finance",start:1981,end:2003},
    {name: "Company Two",category:"Retail",start:1992,end:2008},
    {name: "Company Three",category:"Auto",start:1999,end:2007},
    {name: "Company Four",category:"Retail",start:1989,end:2010},
    {name: "Company Five",category:"Technology",start:2009,end:2014},
    {name: "Company Six",category:"Finance",start:1987,end:2010},
    {name: "Company Seven",category:"Auto",start:1986,end:1996},
    {name: "Company Eight",category:"Technology",start:2011,end:2016},
    {name: "Company Nine",category:"Retail",start:1981,end:1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 44, 61, 13, 15, 45, 25, 64, 32];

// // foreach it doesn't return anything ! is synchronous. 
// // for of
// // filter
// // map 
// // sort 
// // reduce 

// //foreach :

// // for(let i=0; i<companies.length;i++){
// //     console.log(companies[i]);
// // }

// // // companies.forEach(function(company, index, companies *hame company ha*   ){
// // companies.forEach(function(company){
// //     console.log(company.name);
// // });

// // //filter  :

//get 21 and older :)

// // let canDrink=[];
// // for(let i = 0; i<ages.length; i++){
// //     if(ages[i] >= 21){
// //         canDrink.push(ages[i]);
// //     }
// // }

// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });

// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink);

// Filter retail companies

// const retailCompanies = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies);

// Get 80s companies

// const eightiesCompanies = companies.filter(company => (company.start > 1980 && 
// company.start < 1990) );

// console.log(eightiesCompanies);

const lastedTenYears = companies.filter(company => (company.end - company.start)>=10);
console.log(lastedTenYears);

// map 
// create array of company names

const companyNames = companies.map(function(company) {
    return company.name;
});

console.log(companyNames);


// sort 
const sortedCompanies = companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1;
    } else {
        return -1;
    }
});

console.log(sortedCompanies);

const sortedCompanies2 = companies.sort(function(c1,c2){
    if(c1.end > c2.end){
        return 1;
    } else {
        return -1;
    }
});

console.log(sortedCompanies2);
 
const sortedCompanies3= companies.sort((c1,c2) => (c1.start > c2.start ? 1 : -1));

console.log(sortedCompanies3);



// reduce 