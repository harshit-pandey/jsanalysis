
/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

 */

jQuery.factorial = function(n){
    fact = 1;
    for (i = n; i > 0; i--) 
        fact *= i;
    return fact;
}

jQuery.combination = function(n, k){
    return jQuery.factorial(n) / jQuery.factorial(k) / jQuery.factorial(n - k);
}

jQuery.permutation = function(n, r){
    return jQuery.factorial(n) / jQuery.factorial(n - r);
}

jQuery.gamma = function(x){
    if (x > 0) {
        if (x != Math.floor(x)) {
            with (Math) {
                var v = 1;
                while (x < 8) {
                    v *= x;
                    x++
                }
                var w = 1 / (x * x);
                return exp(((((((((-3617 / 122400) * w + 7 / 1092) * w -
                691 / 360360) *
                w +
                5 / 5940) *
                w -
                1 / 1680) *
                w +
                1 / 1260) *
                w -
                1 / 360) *
                w +
                1 / 12) /
                x +
                0.5 * log(2 * PI) -
                log(v) -
                x +
                (x - 0.5) * log(x));
            }
        }
        else {
            return jQuery.factorial(x - 1);
        }
    }
    return false;
}
jQuery.precision = function(x, eps){
    var dec = Math.pow(10, Math.floor(Math.log(1 / eps) * Math.LOG10E));
    return Math.round(dec * x) / dec;
}
jQuery.minimum = function(arr){
    var min = arr[0];
    for (i = 0; i < arr.length; i++) 
        if (arr[i] < min) 
            min = arr[i];
    return min;
}

jQuery.maximum = function(arr){
    var max = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
    
}

jQuery.mean = function(arr){
    return jQuery.sum(arr) / arr.length;
}

jQuery.sum = function(arr){
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
jQuery.mode = function(arr){

    var arrsort = arr.sort(function(a, b){
        return a - b;
    });
    var count = 1;
    var position = 0;
    var frequencies = [];
    var values = [];
    for (i = 0; i < arrsort.length; i++) {
        if (arrsort[i] == arrsort[i + 1]) {
            count++
        }
        else {
            frequencies[position] = count;
            values[position] = arrsort[i];
            position++;
            count = 1;
        }
    }
    var max = frequencies[0];
    for (i = 0; i < frequencies.length; i++) 
        if (frequencies[i] > max) {
            max = frequencies[i];
            position = i;
        }
    return values[position];
}

jQuery.median = function(arr){
    arrsort = arr.sort(function(a, b){
        return a - b;
    })
    return arrsort[Math.round((arr.length) / 2) - 1];
}

jQuery.quartiles = function(arr){
    arrsort = arr.sort(function sortNumber(a, b){
        return a - b;
    });
    return [arrsort[Math.round((arrsort.length) / 4) - 1], arrsort[Math.round((arrsort.length) / 2) - 1], arrsort[Math.round((arrsort.length) * 3 / 4) - 1]];
}

jQuery.variance = function(arr){
    var sq_dev = [];
    u = jQuery.mean(arr);
    for (i = 0; i < arr.length; i++) {
        sq_dev[i] = Math.pow(arr[i] - u, 2);
    }
    return jQuery.sum(sq_dev) / arr.length;
}

jQuery.meandev = function(arr){
    var dev = [];
    u = jQuery.mean(arr);
    for (i = 0; i < arr.length; i++) {
        dev[i] = Math.abs(arr[i] - u);
    }
    return jQuery.sum(dev) / arr.length;
}

jQuery.stdev = function(arr){
    return Math.sqrt(jQuery.variance(arr));
}

jQuery.covariance = function(arr1, arr2){
    var u = jQuery.mean(arr1);
    var v = jQuery.mean(arr2);
    var sq_dev = [];
    for (i = 0; i < arr1.length; i++) {
        sq_dev[i] = (arr1[i] - u) * (arr2[i] - v);
    }
    return jQuery.sum(sq_dev) / arr1.length;
}

jQuery.corr_coeff = function(arr1, arr2){
    return jQuery.covariance(arr1, arr2) / jQuery.stdev(arr1) / jQuery.stdev(arr2);
}

jQuery.uniformcdf = function(a, b, x){
    if (x < a) 
        return 0;
    else 
        if (x < b) 
            return (x - a) / (b - a);
    return 1;
}

jQuery.binomial = function(n, p, k){
    return jQuery.combination(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

jQuery.binomialcdf = function(n, p, x){
    if (x < 0) 
        return 0;
    var binomarr = [];
    for (k = 0; k < n; k++) 
        binomarr[k] = jQuery.binomial(n, p, k);
    
    if (x < n) {
        var sum = 0;
        for (i = 0; i <= x; i++) 
            sum += binomarr[i];
        return sum;
    }
    return 1;
    
}

jQuery.negbin = function(r, p, x){
    if (x != Math.floor(x)) 
        return false;
    if (x < 0) 
        return 0;
    else 
        return jQuery.combination(x + r - 1, r - 1) * Math.pow(p, r) * Math.pow(1 - p, x);
}


jQuery.negbincdf = function(n, p, x){
    if (x < 0) 
        return 0;
    var sum = 0;
    for (k = 0; k <= x; k++) 
        sum += jQuery.negbin(n, p, k);
    return sum;
}


jQuery.gammacdf = function(k, t, x){
    if (!(k > 0 && t > 0)) {
        return false;
    }
    else {
        f = Function("x", "return Math.pow(x," + (k - 1) + ")*Math.exp(-x)");
    }
    return jQuery.asr(f, 0, x / t, 1e-14) / jQuery.gamma(k);
}


jQuery.hypgeom = function(N, m, n, x){
    if (x != Math.floor(x)) {
        return false;
    }
    if (x < 0) 
        return 0;
    else 
        return jQuery.combination(m, x) * jQuery.combination((N - m), n - x) / jQuery.combination(N, n);
}


jQuery.hypgeomcdf = function(N, m, n, x){
    if (x < 0) 
        return 0;
    var sum = 0;
    for (k = 0; k <= x; k++) 
        sum += jQuery.hypgeom(N, m, n, k);
    return sum;
}


jQuery.exponentialcdf = function(l, x){
    return 1 - Math.exp(-1 * x);
}


jQuery.poisson = function(l, x){
    return Math.pow(l, x) * Math.exp(-l) / jQuery.factorial(x)
}


jQuery.poissoncdf = function(l, x){
    if (x < 0) 
        return 0;
    var sum = 0;
    for (k = 0; k <= x; k++) 
        sum += jQuery.poisson(l, k);
    return sum;
}


jQuery.normcdf = function(u, s, t){
    return jQuery.asr(Function("x", "return Math.exp(-Math.pow(x-" + u + ",2)/Math.pow(" + s + ",2)/2)/" + s + "/Math.sqrt(2*Math.PI)"), 0, t, 1e-14);
}


jQuery.linear_reg_eq = function(arrf, arrx){
    var u = jQuery.mean(arrf);
    var v = jQuery.mean(arrx);
    var sq_dev = [];
    var devx = [];
    for (i = 0; i < arrf.length; i++) {
        sq_dev[i] = (arrf[i] - u) * (arrx[i] - v);
        devx[i] = Math.pow(arrx[i] - v, 2);
    }
    var linear_eq_coeff = jQuery.sum(sq_dev) / jQuery.sum(devx);
    var linear_eq_const = u - linear_eq_coeff * v;
    return Function("x", "return " + linear_eq_coeff + "*x+" + linear_eq_const);
}


jQuery.exp_reg_eq = function(arrf, arrx){
    for (i = 0; i < arrf.length; i++) {
        (arrf[i] = Math.log(arrf[i]));
    }
    var u = jQuery.mean(arrf);
    var v = jQuery.mean(arrx);
    var sq_dev = [];
    var devx = [];
    for (i = 0; i < arrf.length; i++) {
        sq_dev[i] = (arrf[i] - u) * (arrx[i] - v);
        devx[i] = Math.pow(arrx[i] - v, 2);
    }
    var exp_coeff = jQuery.sum(sq_dev) / jQuery.sum(devx);
    var exp_const = Math.exp(u - exp_coeff * v);
    return Function("x", "return Math.exp(" + exp_coeff + "*x)*" + exp_const);
}


jQuery.secantmethod = function(func, min, max, error, maxiter){
    var d;
    for (n = 1; n <= maxiter; n++) {
        var fmx = func(max);
        d = (max - min) / (fmx - func(min)) * fmx;
        if (Math.abs(d) < error) {
            return max;
        }
        min = max;
        max = max - d;
    }
    return max;
}


jQuery.fivept = function(func, x, h){
    return (-func(x + h * 2) + 8 * func(x + h) - 8 * func(x - h) + func(x - h * 2)) / h / 12;
}


jQuery.fcrit = function(f, a, b){
    return jQuery.precision(jQuery.secantmethod(Function("t", "return jQuery.fivept(" + f + ",t,1e-3)"), a, b, 1e-13, 99999), 1e-12)
}


jQuery.asr = function(f, a, b, eps){
    var c = (a + b) / 2;
    var h = (b - a) / 6;
    var fa = f(a);
    var fb = f(b);
    var fc = f(c);
    var recursive_asr = function(f, a, b, c, eps, sum, fa, fb, fc){
        var cl = (a + c) / 2;
        var cr = (c + b) / 2;
        var h = (c - a) / 6;
        var fcr = f(cr);
        var fcl = f(cl);
        var left = (fa + 4 * fcl + fc) * h;
        var right = (fc + 4 * fcr + fb) * h;
        if (Math.abs(left + right - sum) <= 15 * eps) {
            return left + right + (left + right - sum) / 15;
        }
        return recursive_asr(f, a, c, cl, eps / 2, left, fa, fc, fcl) + recursive_asr(f, c, b, cr, eps / 2, right, fc, fb, fcr);
    }
    return jQuery.precision(recursive_asr(f, a, b, c, eps, h * (fa + fb + 4 * fc), fa, fb, fc), eps);
}