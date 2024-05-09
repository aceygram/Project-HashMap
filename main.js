class HashMap{
  constructor(size){
    this.map = new Array(size).fill(null).map(() => []);
    this.size = size;
  }

  hash(key) {
    let hashCode = 0;
        
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.size;
  } 

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.map[index];
    for (const entry of bucket) {
        if (entry.key === key) {
            entry.value = value; // Update value if key already exists
            return "I just replaced the old value";
        }
        return;
    }
    bucket.push({ key, value }); // Append new entry to the bucket
    return "I just created a new value value";
  }
   
  get(key) {
    const index = this.hash(key);
    const bucket = this.map[index];
    for (const entry of bucket) {
        if (entry.key === key) {
            return entry.value;
        }
    }
    return 'Key Not Found';
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.map[index];
    for (const entry of bucket) {
        if (entry.key === key) {
            return true;
        }
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.map[index];
    const idx = bucket.findIndex(entry => entry.key === key);
    if (idx !== -1) {
        bucket.splice(idx, 1); // Remove entry from bucket
        return true;
    }
    return false;
  }

  length() {
    const buckets = this.map;
    let count = 0
    
    buckets.forEach(bucket => {
      let uniqueKeys = new Set(bucket.map(entry => entry.key));
      count += uniqueKeys.size
    })
    return count;
  }

  clear() {
    const buckets = this.map;
    buckets.forEach(bucket => {
      bucket.length = 0;
    })
  }

  keys() {
    const buckets = this.map;
    let result = new Array()
    buckets.forEach(bucket => {
      new Set(bucket.map(entry => {
        result.push(entry.key)
      }));
    })
    return result;
  }

  values() {
    const buckets = this.map;
    let result = new Array()
    buckets.forEach(bucket => {
      new Set(bucket.map(entry => {
        result.push(entry.value)
      }));
    })
    return result;
  }

  values() {
    const buckets = this.map;
    let result = new Array()
    buckets.forEach(bucket => {
      new Set(bucket.map(entry => {
        result.push(entry.value)
      }));
    })
    return result;
  }
}


const HM = new HashMap(16);
// console.log(HM.hash('promise'));
// console.log(HM.hash('promis'));
HM.set('carla', 'ace');
HM.set('carl', 'ace');
HM.set('car', 'ace');
HM.set('ca', 'ace');

// console.log(HM)

// console.log(HM.set('carla', 'promise'));


// console.log(HM.hash('promise'));
// console.log(HM)

// console.log(HM.get('carla'));

// console.log(HM.has('carla'));

// console.log(HM.remove('carl'));

// console.log(HM.has('carla'));
// console.log(HM.length());
// console.log(HM.keys());
// console.log(HM);
console.log(HM.values());


// HM.clear();

// console.log(HM.length());
// console.log(HM.keys());
// console.log(HM);

