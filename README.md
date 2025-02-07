# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

My work:

1. 1 is a constant factor that happens when the base case is reached,
2. 3T(n/3) + c is what happens otherwise, the 3T(n/3) is here because at each recursion step we are dividing the input n up into three smaller arrays then passing them back though the function. the c is here just to show that i understand that there is a constant ammount of work happening at each step, but in the end i 
end up ignoring it because afterall it is insignificant asymtopticly.

Recurrence relation:
T(n) =  
{1              if n <=1     }
{3T(n/3) + c    if n > 1     }


T(n)= 3T(n/3) + c
    = 9T(n/9) + c + c/3
    = 27T(n/27) + c + c/3 + c/9
    ...
    = 3^iT(n / 3^i) + $\sum_{k=0}^{i-1} c/3^k$.

for i = log_3(n) and we can ingnore the sumation because its of a constant value

this equates out to:

    = nT(1) ϵ Θ(n)

This function makes since to me to be linear because while we are dividing and conquring, we are still adding all the indecies of the array up one by one. its essentially a for loop with extra steps and overhead of recursion. That is why it makes since to be linear, its not like we are doing less work, if anything we are doing more.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.