// import Vue from 'vue';

const ID = Symbol('id');

class ThrottleHelper {

  constructor (type) {
    this.queue = [];
    this.ticking = false;
    this.type = type;
    this.scrollY = window.scrollY || window.pageYOffset;
    this.nextId = 1;

    this._init();
  }

  static getInstance (type) {
    let instance = ThrottleHelper.instances.find((instance) => {
      return instance.type === type;
    });
    if (!instance) {
      instance = new ThrottleHelper(type);
      ThrottleHelper.instances.push(instance);
    }
    return instance;
  }

  _init () {
    this._onUpdate = this._onUpdate.bind(this);
    window.addEventListener(this.type, this._onUpdate, {passive: true});
  }

  _onUpdate (e) {
    if (this.ticking) { return; }
    this.ticking = true;
    if (this.type === 'scroll') {
      this.scrollY = window.scrollY || window.pageYOffset;
    }
    requestAnimationFrame(this._update.bind(this, e));
  }

  _update (e) {
    this.queue.forEach((fn) => {
      fn(e);
    });
    this.ticking = false;
  }

  add (fn) {
    fn[ID] = this.nextId++;
    this.queue.push(fn);
    return fn[ID];
  }

  remove (idOrFunction) {
    this.queue = this.queue.filter((fn) => {
      if (typeof idOrFunction === 'function') {
        return fn !== idOrFunction;
      } else {
        return fn[ID] !== idOrFunction;
      }
    });
  }
}

ThrottleHelper.instances = [];

// Vue.prototype.$scrollHelper = ThrottleHelper.getInstance('scroll');
// Vue.prototype.$resizeHelper = ThrottleHelper.getInstance('resize');

export default (context, inject) => { 
  inject('scrollHelper', ThrottleHelper.getInstance('scroll'));
  inject('resizeHelper', ThrottleHelper.getInstance('resize'));
};