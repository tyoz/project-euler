function f () {
	let sum = 0;
	let n1 = 1;
	let n2 = 1;
	let n3 = 1;
	
	while(n2 <= 4000000) {
        if(n2 % 2 === 0) {
            sum += n2;
        }
        console.log(n2);
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }

	return sum;
}

let sum = f();
console.log(sum);
