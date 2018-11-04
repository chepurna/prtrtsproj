const {SpecReporter} = require('jasmine-spec-reporter');
const appDir='E:/doit/prtrtsproj/apps/natestapp';
exports.config={
    specs : [appDir+"/e2e/**/*.e2e-spec.ts"],
    framework:'jasmine',
    jasmineNodeOpts:{showColors:true,defaultTimeoutInterval:30000},
    onPrepare(){
        require('ts-node').register({project:appDir+'/e2e/tsconfig.e2e.json'});
        jasmine.getEnv().addReporter(new SpecReporter({spec:{displayStacktrade:true}}));
    }
};