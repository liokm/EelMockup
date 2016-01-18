import React, { Component } from 'react';

// TODO RN currently does not support static method
// in node_modules/react-native/packager/react-packager/.babelrc
//class RuleSet {
//  static types = [
//    { name: 'OFF', icon: 'local-cafe', text: "OFF DUTY" },
//    { name: 'SB', icon: 'snooze', text: "SLEEPER" },
//    { name: 'D', icon: 'local-shipping', text: "DRIVING" },
//    { name: 'ON', icon: 'access-time', text: "ON DUTY" }
//  ]
//  static labels = Array.from(Array(24 + 1), (x, k) => k)
//  static getName() {
//    // Dear IE does not support func.name
//    return this.name || /^function\s+([\w\$]+)\s*\(/.exec(this.toString())[1];
//  }
//  static getDefaultState() {
//    return this.types[0].name;
//  }
//}

class RuleSet {
}

RuleSet.types = [
  { name: 'OFF', icon: 'local-cafe', text: "OFF DUTY" },
  { name: 'SB', icon: 'snooze', text: "SLEEPER" },
  { name: 'D', icon: 'local-shipping', text: "DRIVING" },
  { name: 'ON', icon: 'access-time', text: "ON DUTY" }
]
RuleSet.labels = Array.from(Array(24 + 1), (x, k) => k)
RuleSet.getName = function() {
  // Dear IE does not support func.name
  return this.name || /^function\s+([\w\$]+)\s*\(/.exec(this.toString())[1];
}
RuleSet.getDefaultState = function() {
  return this.types[0].name;
}

const rulesets = [
  RuleSet
];

rulesets.get = function(name) {
  for (let r of this) {
    if (r.getName() == name) {
      return r;
    }
  }
  return this[0];
};

export default rulesets;
