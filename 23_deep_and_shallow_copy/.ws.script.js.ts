
/**
 * GENERATED FILE FROM THE TYPESCRIPT-WORKSHEET EXTENSION
*/

import * as __fs from 'node:fs';
import os from 'node:os';
const dataFile: any[] = [];

async function __tsrun() {
try {

let a =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'a',  called: () => (10), line: 14});
let b =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'b',  called: () => (a), line: 15});
 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (b = 20), line: 16});

mylog(console.log, {type: 'log', called: [a], line: 18});

/*
 - datatype that contains shallow copy behavior
 - Object
 - Array
 - Function
 - Date, Map, Set, etc.
*/

let obj1 =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'obj1',  called: () => ({ name: 'Alice' }), line: 28});
let obj2 =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'obj2',  called: () => (obj1), line: 29});

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (obj2.name = 'Bob'), line: 31});

mylog(console.log, {type: 'log', called: [obj1.name], line: 33});

// shallow copy behavior with objects

const original =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'original',  called: () => ({
    name: 'John',
    address: { city: 'New York' },
}), line: 37});

const shallow =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'shallow',  called: () => ({ ...original }), line: 42});

 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (shallow.name = 'Jane'), line: 44}); // ✅ Only affects shallow copy
 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (shallow.address.city = 'Los Angeles'), line: 45}); // ❌ Affects both!

mylog(console.log, {type: 'log', called: [original.address.city], line: 47});

// convert object into shallow copy

const userInfo =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'userInfo',  called: () => ({
    fname: 'John',
    lname: 'Wick',
    age: 36,
    city: {
        state: 'New York',
        country: 'USA',
    },
}), line: 51});

const cloneUser =  tsWorksheetWatch({stringed: 'empty', type: 'variable', variable: 'cloneUser',  called: () => (userInfo), line: 61});
 tsWorksheetWatch({stringed: 'empty', type: 'expression', variable: undefined,  called: () => (cloneUser?.city?.state = 'Vegas'), line: 62});

mylog(console.log, {type: 'log', called: [userInfo], line: 64});

} catch(error) {

  
}
}

__tsrun().then()

let ___done_ts_worksheet = "";
___done_ts_worksheet = "asdf";


function stringify(obj: any) {
  let cache: any = [];
  let str = JSON.stringify(obj, function(key, value) {
    if(typeof value === 'function') {
      const fn = __tsGetFn(value.toString()) ?? __tsGetArrowFn(value.toString());
      return fn;
    }
    if(value === undefined) {
      return '__TS_WORKSHEET_UNDEFINED__'
    }
    if (typeof value === "object" && value !== null) {
      if(value?.then) {
        return 'Promise';
      }
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
      return value === undefined ? '__TS_WORKSHEET_UNDEFINED__' : value;
    }
    return value;
  });
  cache = null; // reset the cache
  return str;
}



function __tsGetFn(str: string) {
  const noSpaces = str.replaceAll(' ', '');
  const __tsFnWithArgs = /(function.*\(.*\))/
  const result = __tsFnWithArgs.exec(noSpaces);
  if(result?.length) {
    
    const fn = result.at(-1);
    const afterKey = fn.substring('function'.length);
    return 'function ' + afterKey;
  }
  return undefined;
}

function __tsGetArrowFn(str: string) {
  const noSpaces = str.replaceAll(' ', '');
  const __tsArrowWithArgs= /(\({0,1}[A-Za-z]{1}[A-Za-z0-9_,]*\){0,1})=>/;
const __tsArrorWithoutArgs = /\(\){1}=>/;
  const arrowWithArgsResult = __tsArrowWithArgs.exec(noSpaces);
  if(arrowWithArgsResult?.length) {
    const args =  arrowWithArgsResult.at(-1);
    return 'arrow fn(' + args + ')';
  }
  const arrowWithoutArgsResult = __tsArrorWithoutArgs.exec(noSpaces);
  if(arrowWithoutArgsResult?.length) {
    return 'arrow fn()';
  }
  return undefined;
}

function tryToStringify(value: any) {
    let res = '';
    try {
        switch(typeof value) {
            case 'object':
                res = stringify(value);
                break;
            case 'function':
                res = __tsGetFn(value.toString()) ?? __tsGetArrowFn(value.toString());
                break;
            case 'bigint':
                res = value?.toString();
                break;    
            default: 
                // isNaN
                if(value !== value) {
                  res = value?.toString();
                } else {
                  res = value === undefined ? '__TS_WORKSHEET_UNDEFINED__' : value;
                }
        }
    } catch(err: any) {
        return err?.message.startsWith('Convert') ? 'Non displayable' : err?.message;
    }
    return res?.length > 2000 ? res?.substring(0, 2000) : res;
}

function __onError(error: any, dataValue: any) {
  const fixedError = error?.stack ?? error;
  const stringError = JSON.stringify(fixedError, Object.getOwnPropertyNames(fixedError));

  dataValue.type = 'error';
  dataValue.called = [error.message , stringError];
}
function save(hide: boolean, dataValue?: any) {
  if(hide) {
    return;
  }
  const isIpcCompatible = !false && typeof Bun === 'undefined' && !globalThis?.Deno && !os.platform().startsWith('win');
  if(dataValue) {
    dataFile.push(dataValue);
  }

  if(isIpcCompatible) {
    process.send(dataValue);
  }

  if(!dataValue && !isIpcCompatible) {
    __fs.writeFileSync('e:\\Zeet Geek\\Learning\\Learn__javascript\\23_deep_and_shallow_copy\\.ws.data.json', JSON.stringify(dataFile));  
  }
}

function tsWorksheetWatch(data: {stringed: string, hide?: boolean, type: string, variable?: string, called: () => any, line: number }) {
  const dataValue = {...data, called: 'Failed Promise. Please use a .catch to display it'};
  let called: any;
  try {
      called = data.called();
  } catch(error) {
      __onError(error, dataValue);
      save(data.hide, dataValue);
      throw error;
  }

  if(data.type === 'throw') {
      __onError(called, dataValue);
      save(data.hide, dataValue);
      throw called;
  }

  if(called?.then) {
     data.called = called.then((r: any) => {
      dataValue.prefix = 'Resolved Promise: ';
        dataValue.called = tryToStringify(r);
         save(data.hide, dataValue);
         return r;
     }).catch((err: any) => {
      dataValue.prefix = 'Rejected Promise: ';
      dataValue.called = tryToStringify(err);
      dataValue.type = 'error';
      save(data.hide, dataValue);
      throw err;
     });
  } else {
      dataValue.called = tryToStringify(called);
      save(data.hide, dataValue);
  }

  return called;
}

function mylog(logFn: any, data: {type: string, called: any[], line: number }) {
    logFn(...data.called);
    data.called = data.called.map(entry => tryToStringify(entry)); 
    save(false, data);
}

if (globalThis?.Deno) {

  addEventListener("error", (event) => {
    event.preventDefault();
  });
  
  addEventListener("unhandledrejection", (e) => {
    e.preventDefault();
  });
  
  addEventListener("unload", () => {
    save(false);
  });
  }
  process?.on('uncaughtException', (error: Error) => {   
  });
  
  process?.on('unhandledRejection', () => {})
  
  process?.on('beforeExit', e => {
    if(typeof Bun !== 'undefined' && dataFile.some(e => e.type === 'error')) {
      process.exit(0);
    }
  })
  
  process?.on('exit', function() {
    save(false);
  });
      
    