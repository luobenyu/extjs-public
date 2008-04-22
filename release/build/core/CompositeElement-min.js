/*
 * Ext JS Library 2.1
 * Copyright(c) 2006-2008, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

Ext.CompositeElement=function(A){this.elements=[];this.addElements(A)};Ext.CompositeElement.prototype={isComposite:true,addElements:function(E){if(!E){return this}if(typeof E=="string"){E=Ext.Element.selectorFunction(E)}var D=this.elements;var B=D.length-1;for(var C=0,A=E.length;C<A;C++){D[++B]=Ext.get(E[C])}return this},fill:function(A){this.elements=[];this.add(A);return this},filter:function(A){var B=[];this.each(function(C){if(C.is(A)){B[B.length]=C.dom}});this.fill(B);return this},invoke:function(E,B){var D=this.elements;for(var C=0,A=D.length;C<A;C++){Ext.Element.prototype[E].apply(D[C],B)}return this},add:function(A){if(typeof A=="string"){this.addElements(Ext.Element.selectorFunction(A))}else{if(A.length!==undefined){this.addElements(A)}else{this.addElements([A])}}return this},each:function(E,D){var C=this.elements;for(var B=0,A=C.length;B<A;B++){if(E.call(D||C[B],C[B],this,B)===false){break}}return this},item:function(A){return this.elements[A]||null},first:function(){return this.item(0)},last:function(){return this.item(this.elements.length-1)},getCount:function(){return this.elements.length},contains:function(A){return this.indexOf(A)!==-1},indexOf:function(A){return this.elements.indexOf(Ext.get(A))},removeElement:function(D,F){if(Ext.isArray(D)){for(var C=0,A=D.length;C<A;C++){this.removeElement(D[C])}return this}var B=typeof D=="number"?D:this.indexOf(D);if(B!==-1&&this.elements[B]){if(F){var E=this.elements[B];if(E.dom){E.remove()}else{Ext.removeNode(E)}}this.elements.splice(B,1)}return this},replaceElement:function(D,C,A){var B=typeof D=="number"?D:this.indexOf(D);if(B!==-1){if(A){this.elements[B].replaceWith(C)}else{this.elements.splice(B,1,Ext.get(C))}}return this},clear:function(){this.elements=[]}};(function(){Ext.CompositeElement.createCall=function(B,C){if(!B[C]){B[C]=function(){return this.invoke(C,arguments)}}};for(var A in Ext.Element.prototype){if(typeof Ext.Element.prototype[A]=="function"){Ext.CompositeElement.createCall(Ext.CompositeElement.prototype,A)}}})();Ext.CompositeElementLite=function(A){Ext.CompositeElementLite.superclass.constructor.call(this,A);this.el=new Ext.Element.Flyweight()};Ext.extend(Ext.CompositeElementLite,Ext.CompositeElement,{addElements:function(E){if(E){if(Ext.isArray(E)){this.elements=this.elements.concat(E)}else{var D=this.elements;var B=D.length-1;for(var C=0,A=E.length;C<A;C++){D[++B]=E[C]}}}return this},invoke:function(F,B){var D=this.elements;var E=this.el;for(var C=0,A=D.length;C<A;C++){E.dom=D[C];Ext.Element.prototype[F].apply(E,B)}return this},item:function(A){if(!this.elements[A]){return null}this.el.dom=this.elements[A];return this.el},addListener:function(B,G,F,E){var D=this.elements;for(var C=0,A=D.length;C<A;C++){Ext.EventManager.on(D[C],B,G,F||D[C],E)}return this},each:function(F,E){var C=this.elements;var D=this.el;for(var B=0,A=C.length;B<A;B++){D.dom=C[B];if(F.call(E||D,D,this,B)===false){break}}return this},indexOf:function(A){return this.elements.indexOf(Ext.getDom(A))},replaceElement:function(D,C,A){var B=typeof D=="number"?D:this.indexOf(D);if(B!==-1){C=Ext.getDom(C);if(A){var E=this.elements[B];E.parentNode.insertBefore(C,E);Ext.removeNode(E)}this.elements.splice(B,1,C)}return this}});Ext.CompositeElementLite.prototype.on=Ext.CompositeElementLite.prototype.addListener;if(Ext.DomQuery){Ext.Element.selectorFunction=Ext.DomQuery.select}Ext.Element.select=function(A,D,B){var C;if(typeof A=="string"){C=Ext.Element.selectorFunction(A,B)}else{if(A.length!==undefined){C=A}else{throw"Invalid selector"}}if(D===true){return new Ext.CompositeElement(C)}else{return new Ext.CompositeElementLite(C)}};Ext.select=Ext.Element.select;