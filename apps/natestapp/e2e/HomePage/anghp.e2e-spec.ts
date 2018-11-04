import {browser,protractor} from 'protractor';
//import {anghpge} from './anghp.po';

describe('verify calculator page',() => {
    it('a test',()=>{
        browser.get("https://juliemr.github.io/protractor-demo/");
        browser.getTitle().then((aTitle)=>{
            console.log(aTitle);
        });    
        
    });
});