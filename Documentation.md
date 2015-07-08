Factorial of 5 <br />
jQuery.factorial(5)<br />
120 <br />
<br />
Combinations of 5 from 52 items<br />
jQuery.combination(52,5)<br />
2598960<br />
<br />
Permutations of 5 from 52 items<br />
jQuery.permutation(52,5)<br />
311875200<br />
<br />
Gamma function at .5<br />
jQuery.gamma(.5)<br />
1.7724538509055165<br />
<br />
Round to fourth decimal place<br />
jQuery.precision(3.14159,1e-3)<br />
3.1412<br />
<br />
Minimum value of an array<br />
jQuery.minimum(`[1,2,3]`)<br />
1<br />
<br />
Maximum value of an array<br />
jQuery.minimum(`[1,2,3]`)<br />
3<br />
<br />
Mean value of an array<br />
jQuery.minimum(`[1,2,3]`)<br />
2<br />
<br />
Sum of an array<br />
jQuery.minimum(`[1,2,3]`)<br />
6<br />
<br />
Mode of an array<br />
jQuery.mode(`[1,2,2,3]`)<br />
2<br />
<br />
Median of an array<br />
jQuery.median(`[1,2,3,6,9]`)<br />
3<br />
<br />
Quartiles of an array<br />
jQuery.quartiles(`[1,2,3,6,9,3,1,2,5]`)<br />
`[1,3,5]`<br />
<br />
Variance of an array<br />
jQuery.variance(`[1,2,3,6,9,3,1,2,5]`)<br />
6.246913580246913<br />
<br />
Mean deviation of an array<br />
jQuery.meandev(`[1,2,3,6,9,3,1,2,5]`)<br />
2.074074074074074<br />
<br />
Standard deviation of an array<br />
jQuery.stdev(`[1,2,3,6,9,3,1,2,5]`)<br />
2.499382639822665<br />
<br />
Covariance of two arrays<br />
jQuery.covariance(`[1,2,3,6,9,3,1,2,5]`,`[2,3,5,2,5,7,8,9,6]`)<br />
-1.1234567901234567<br />
<br />
Correlation coefficient of two arrays<br />
jQuery.corr\_coeff(`[1,2,3,6,9,3,1,2,5],[2,3,5,2,5,7,8,9,6]`)<br />
-0.18780499704286396<br />
<br />
Probability of (x<.5) of uniform distribution with parameters 0,2<br />
jQuery.uniform(0,2,.5)<br />
0.25<br />
<br />
Probability of (x=2) of binomial distribution of 5 trials with probability 1/2<br />
jQuery.binomial(5,1/2,2)<br />
0.3125<br />
<br />
Probability of (x<=2) of binomial distribution of 5 trials with probability 1/2<br />
jQuery.binomialcdf(5,1/2,2)<br />
0.5<br />
<br />
Probability of exactly 1 success before 2nd failure of an event with probability 1/2<br />
jQuery.negbin(2,1/2,1)<br />
0.25<br />
<br />
Probability of 1 success or less before 2nd failure of an event with probability 1/2<br />
jQuery.negbincdf(2,1/2,1)<br />
0.5<br />
<br />
Probability that a variable following the gamma distribution with paramters k=2,t=1 is less than 2<br />
jQuery.hypgeom(50,25,10,5)<br />
0.27479755252772714<br />
<br />
Probability of selecting 5 or less items of a type from 50 items in 10 trials if 25 items are of the type<br />
jQuery.hypgeomcdf(50,25,10,5)<br />
0.6373987762638635<br />
<br />
Probability an exponentially distributed variable with parameter l=.5 is less than 2<br />
jQuery.exponentialcdf(.5,2)<br />
0.8646647167633873<br />
<br />
Probability a possion variable with parameter l=2 is less than or equal 3<br />
jQuery.poisson(2,3)<br />
0.1804470443154836<br />
<br />
Probability a possion variable with parameter l=2 is less than or equal 3<br />
jQuery.poissoncdf(2,3)<br />
0.8571234604985472<br />
<br />
Probability a normal variable with mean 5 and standard deviation 2 is less than 9<br />
jQuery.normcdf(4,2,9)<br />
0.99379033467422014<br />
<br />
Least squares function using data points from two arrays <br />
jQuery.linear\_reg\_eq(`[7,3,8,3,2],[13,7,15,7,3]`)<br />
function anonymous(x) { return 0.5416666666666666\*x + -0.27500000000000036; }<br />
<br />
Exponential least squares fit function using data points from two arrays <br />
jQuery.exp\_reg\_eq(`[48,10,63,8,5],[7,3,8,3,2]`)<br />
function anonymous(x) { return Math.exp(0.4171835379487424`*`x) `*` 2.4160060454307533; }<br />
<br />
The zero of function f(x)=x^3-5 on the interval `[0,5]` to a precision of 1e-15 in 1000  iterations<br />
jQuery.secantmethod(function f(x) {return x\*x\*x-5},0,5,1e-15,1000)<br />
1.709975946676697<br />
<br />
Approximate derivative of f(x)=x^3-5 at the point 2 using step size of 1e-3<br />
jQuery.fivept(function (x){return x\*x\*x-5},2,1e-3)<br />
11.99999999999912<br />
<br />
Critical points of cos(x) on the interval 3,4<br />
jQuery.fcrit(function (x){return Math.cos(x)}, 3,4)<br />
3.14159265359<br />
<br />
Numerical integral of sin(x^2) from 0,5 to 1e-15<br />
jQuery.asr(function (x){return Math.sin(x\*x)},0,5, 1e-15)<br />
0.52791728116532