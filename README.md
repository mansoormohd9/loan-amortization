# loan-amortization

A small utility tool to get different stats for a given Loan Amount, No of Emis and Annual Interest Rate.We could also see the Principal and Interest Breakdown over the period duration.

Use the following link to play around with the app: https://loan-amortization.herokuapp.com/

### Next Steps to continue
* We could expose this as a library so that people could integrate it on their website.
* Even more detailed breakup including month and year of the period.

Note: Since I am rounding of the Interest and Principal for each period to two decimal digits we are left with a fraction of balance at the end which is ignorable.I have left this so that people would now the end balance being left out but we could definetly round that off to zero if that makes more sense.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
