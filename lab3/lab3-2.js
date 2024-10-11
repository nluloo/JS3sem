let array = [1, [1, 2, [3, 4]], [2, 4]];

function sumArray(arr)
{
    return arr.reduce((acc, curr) =>
    {
        if (Array.isArray(curr))
        {
            return acc + sumArray(curr);
        }
        return acc + curr;
    }, 0);
}

let sum = sumArray(array);
console.log(sum);