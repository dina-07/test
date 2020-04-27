import { r as is_function, u as assign, S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, w as validate_each_argument, x as validate_each_keys, e as element, t as text, a as space, c as claim_element, f as children, j as claim_text, g as detach_dev, h as claim_space, l as add_location, k as attr_dev, o as insert_dev, n as append_dev, y as listen_dev, z as update_keyed_each, A as check_outros, B as add_render_callback, C as create_bidirectional_transition, D as transition_in, E as transition_out, F as run_all, G as set_data_dev, H as fix_position, I as add_transform, J as create_animation, K as create_in_transition, L as create_out_transition, M as empty, q as query_selector_all, N as group_outros, O as fix_and_outro_and_destroy_block, p as noop } from './client.4190d040.js';

function cubicOut(t) {
    const f = t - 1.0;
    return f * f * f + 1.0;
}
function quintOut(t) {
    return --t * t * t * t * t + 1;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 }) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - (od * u)}`
    };
}
function crossfade(_a) {
    var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
    const to_receive = new Map();
    const to_send = new Map();
    function crossfade(from, node, params) {
        const { delay = 0, duration = d => Math.sqrt(d) * 30, easing = cubicOut } = assign(assign({}, defaults), params);
        const to = node.getBoundingClientRect();
        const dx = from.left - to.left;
        const dy = from.top - to.top;
        const dw = from.width / to.width;
        const dh = from.height / to.height;
        const d = Math.sqrt(dx * dx + dy * dy);
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        const opacity = +style.opacity;
        return {
            delay,
            duration: is_function(duration) ? duration(d) : duration,
            easing,
            css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
        };
    }
    function transition(items, counterparts, intro) {
        return (node, params) => {
            items.set(params.key, {
                rect: node.getBoundingClientRect()
            });
            return () => {
                if (counterparts.has(params.key)) {
                    const { rect } = counterparts.get(params.key);
                    counterparts.delete(params.key);
                    return crossfade(rect, node, params);
                }
                // if the node is disappearing altogether
                // (i.e. wasn't claimed by the other list)
                // then we need to supply an outro
                items.delete(params.key);
                return fallback && fallback(node, params, intro);
            };
        };
    }
    return [
        transition(to_send, to_receive, false),
        transition(to_receive, to_send, true)
    ];
}

function flip(node, animation, params) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    const scaleX = animation.from.width / node.clientWidth;
    const scaleY = animation.from.height / node.clientHeight;
    const dx = (animation.from.left - animation.to.left) / scaleX;
    const dy = (animation.from.top - animation.to.top) / scaleY;
    const d = Math.sqrt(dx * dx + dy * dy);
    const { delay = 0, duration = (d) => Math.sqrt(d) * 120, easing = cubicOut } = params;
    return {
        delay,
        duration: is_function(duration) ? duration(d) : duration,
        easing,
        css: (_t, u) => `transform: ${transform} translate(${u * dx}px, ${u * dy}px);`
    };
}

/* src\routes\information.svelte generated by Svelte v3.20.1 */
const file = "src\\routes\\information.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	child_ctx[14] = list;
	child_ctx[15] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	child_ctx[16] = list;
	child_ctx[17] = i;
	return child_ctx;
}

// (91:0) {#if visible}
function create_if_block(ctx) {
	let p;
	let t0;
	let p_transition;
	let t1;
	let style;
	let t2;
	let t3;
	let div2;
	let input;
	let t4;
	let div0;
	let h20;
	let t5;
	let t6;
	let each_blocks_1 = [];
	let each0_lookup = new Map();
	let t7;
	let div1;
	let h21;
	let t8;
	let t9;
	let each_blocks = [];
	let each1_lookup = new Map();
	let current;
	let dispose;
	let each_value_1 = /*todos*/ ctx[1].filter(func);
	validate_each_argument(each_value_1);
	const get_key = ctx => /*todo*/ ctx[13].id;
	validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);

	for (let i = 0; i < each_value_1.length; i += 1) {
		let child_ctx = get_each_context_1(ctx, each_value_1, i);
		let key = get_key(child_ctx);
		each0_lookup.set(key, each_blocks_1[i] = create_each_block_1(key, child_ctx));
	}

	let each_value = /*todos*/ ctx[1].filter(func_1);
	validate_each_argument(each_value);
	const get_key_1 = ctx => /*todo*/ ctx[13].id;
	validate_each_keys(ctx, each_value, get_each_context, get_key_1);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key_1(child_ctx);
		each1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			p = element("p");
			t0 = text("Flies in and out");
			t1 = space();
			style = element("style");
			t2 = text(".new-todo {\r\n\t\tfont-size: 1.4em;\r\n\t\twidth: 100%;\r\n\t\tmargin: 2em 0 1em 0;\r\n\t}\r\n\r\n\t.board {\r\n\t\tmax-width: 36em;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t.left, .right {\r\n\t\tfloat: left;\r\n\t\twidth: 50%;\r\n\t\tpadding: 0 1em 0 0;\r\n\t\tbox-sizing: border-box;\r\n\t}\r\n\r\n\th2 {\r\n\t\tfont-size: 2em;\r\n\t\tfont-weight: 200;\r\n\t\tuser-select: none;\r\n\t}\r\n\r\n\tlabel {\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tdisplay: block;\r\n\t\tfont-size: 1em;\r\n\t\tline-height: 1;\r\n\t\tpadding: 0.5em;\r\n\t\tmargin: 0 auto 0.5em auto;\r\n\t\tborder-radius: 2px;\r\n\t\tbackground-color: #eee;\r\n\t\tuser-select: none;\r\n\t}\r\n\r\n\tinput { margin: 0 }\r\n\r\n\t.right label {\r\n\t\tbackground-color: rgb(180,240,100);\r\n\t}\r\n\r\n\tbutton {\r\n\t\tfloat: right;\r\n\t\theight: 1em;\r\n\t\tbox-sizing: border-box;\r\n\t\tpadding: 0 0.5em;\r\n\t\tline-height: 1;\r\n\t\tbackground-color: transparent;\r\n\t\tborder: none;\r\n\t\tcolor: rgb(170,30,30);\r\n\t\topacity: 0;\r\n\t\ttransition: opacity 0.2s;\r\n\t}\r\n\r\n\tlabel:hover button {\r\n\t\topacity: 1;\r\n\t}");
			t3 = space();
			div2 = element("div");
			input = element("input");
			t4 = space();
			div0 = element("div");
			h20 = element("h2");
			t5 = text("todo");
			t6 = space();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t7 = space();
			div1 = element("div");
			h21 = element("h2");
			t8 = text("done");
			t9 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, "Flies in and out");
			p_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			style = claim_element(nodes, "STYLE", {});
			var style_nodes = children(style);
			t2 = claim_text(style_nodes, ".new-todo {\r\n\t\tfont-size: 1.4em;\r\n\t\twidth: 100%;\r\n\t\tmargin: 2em 0 1em 0;\r\n\t}\r\n\r\n\t.board {\r\n\t\tmax-width: 36em;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t.left, .right {\r\n\t\tfloat: left;\r\n\t\twidth: 50%;\r\n\t\tpadding: 0 1em 0 0;\r\n\t\tbox-sizing: border-box;\r\n\t}\r\n\r\n\th2 {\r\n\t\tfont-size: 2em;\r\n\t\tfont-weight: 200;\r\n\t\tuser-select: none;\r\n\t}\r\n\r\n\tlabel {\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tdisplay: block;\r\n\t\tfont-size: 1em;\r\n\t\tline-height: 1;\r\n\t\tpadding: 0.5em;\r\n\t\tmargin: 0 auto 0.5em auto;\r\n\t\tborder-radius: 2px;\r\n\t\tbackground-color: #eee;\r\n\t\tuser-select: none;\r\n\t}\r\n\r\n\tinput { margin: 0 }\r\n\r\n\t.right label {\r\n\t\tbackground-color: rgb(180,240,100);\r\n\t}\r\n\r\n\tbutton {\r\n\t\tfloat: right;\r\n\t\theight: 1em;\r\n\t\tbox-sizing: border-box;\r\n\t\tpadding: 0 0.5em;\r\n\t\tline-height: 1;\r\n\t\tbackground-color: transparent;\r\n\t\tborder: none;\r\n\t\tcolor: rgb(170,30,30);\r\n\t\topacity: 0;\r\n\t\ttransition: opacity 0.2s;\r\n\t}\r\n\r\n\tlabel:hover button {\r\n\t\topacity: 1;\r\n\t}");
			style_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			input = claim_element(div2_nodes, "INPUT", { class: true, placeholder: true });
			t4 = claim_space(div2_nodes);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h20 = claim_element(div0_nodes, "H2", {});
			var h20_nodes = children(h20);
			t5 = claim_text(h20_nodes, "todo");
			h20_nodes.forEach(detach_dev);
			t6 = claim_space(div0_nodes);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			t7 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h21 = claim_element(div1_nodes, "H2", {});
			var h21_nodes = children(h21);
			t8 = claim_text(h21_nodes, "done");
			h21_nodes.forEach(detach_dev);
			t9 = claim_space(div1_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div1_nodes);
			}

			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p, file, 91, 1, 2143);
			add_location(style, file, 95, 0, 2223);
			attr_dev(input, "class", "new-todo");
			attr_dev(input, "placeholder", "what needs to be done?");
			add_location(input, file, 158, 1, 3166);
			add_location(h20, file, 165, 2, 3330);
			attr_dev(div0, "class", "left");
			add_location(div0, file, 164, 1, 3308);
			add_location(h21, file, 180, 2, 3695);
			attr_dev(div1, "class", "right");
			add_location(div1, file, 179, 1, 3672);
			attr_dev(div2, "class", "board");
			add_location(div2, file, 157, 0, 3144);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, p, anchor);
			append_dev(p, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, style, anchor);
			append_dev(style, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, input);
			append_dev(div2, t4);
			append_dev(div2, div0);
			append_dev(div0, h20);
			append_dev(h20, t5);
			append_dev(div0, t6);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div0, null);
			}

			append_dev(div2, t7);
			append_dev(div2, div1);
			append_dev(div1, h21);
			append_dev(h21, t8);
			append_dev(div1, t9);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			current = true;
			if (remount) dispose();
			dispose = listen_dev(input, "keydown", /*keydown_handler*/ ctx[8], false, false, false);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*remove, todos*/ 34) {
				const each_value_1 = /*todos*/ ctx[1].filter(func);
				validate_each_argument(each_value_1);
				group_outros();
				for (let i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].r();
				validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);
				each_blocks_1 = update_keyed_each(each_blocks_1, dirty, get_key, 1, ctx, each_value_1, each0_lookup, div0, fix_and_outro_and_destroy_block, create_each_block_1, null, get_each_context_1);
				for (let i = 0; i < each_blocks_1.length; i += 1) each_blocks_1[i].a();
				check_outros();
			}

			if (dirty & /*remove, todos*/ 34) {
				const each_value = /*todos*/ ctx[1].filter(func_1);
				validate_each_argument(each_value);
				group_outros();
				for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].r();
				validate_each_keys(ctx, each_value, get_each_context, get_key_1);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key_1, 1, ctx, each_value, each1_lookup, div1, fix_and_outro_and_destroy_block, create_each_block, null, get_each_context);
				for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].a();
				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!p_transition) p_transition = create_bidirectional_transition(p, fly, { y: 200, duration: 2000 }, true);
				p_transition.run(1);
			});

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks_1[i]);
			}

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			if (!p_transition) p_transition = create_bidirectional_transition(p, fly, { y: 200, duration: 2000 }, false);
			p_transition.run(0);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				transition_out(each_blocks_1[i]);
			}

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
			if (detaching && p_transition) p_transition.end();
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(style);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div2);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].d();
			}

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(91:0) {#if visible}",
		ctx
	});

	return block;
}

// (167:2) {#each todos.filter(t => !t.done) as todo (todo.id)}
function create_each_block_1(key_1, ctx) {
	let label;
	let input;
	let t0;
	let t1_value = /*todo*/ ctx[13].description + "";
	let t1;
	let t2;
	let button;
	let t3;
	let t4;
	let label_intro;
	let label_outro;
	let rect;
	let stop_animation = noop;
	let current;
	let dispose;

	function input_change_handler_1() {
		/*input_change_handler_1*/ ctx[9].call(input, /*todo*/ ctx[13]);
	}

	function click_handler(...args) {
		return /*click_handler*/ ctx[10](/*todo*/ ctx[13], ...args);
	}

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			label = element("label");
			input = element("input");
			t0 = space();
			t1 = text(t1_value);
			t2 = space();
			button = element("button");
			t3 = text("x");
			t4 = space();
			this.h();
		},
		l: function claim(nodes) {
			label = claim_element(nodes, "LABEL", {});
			var label_nodes = children(label);
			input = claim_element(label_nodes, "INPUT", { type: true });
			t0 = claim_space(label_nodes);
			t1 = claim_text(label_nodes, t1_value);
			t2 = claim_space(label_nodes);
			button = claim_element(label_nodes, "BUTTON", {});
			var button_nodes = children(button);
			t3 = claim_text(button_nodes, "x");
			button_nodes.forEach(detach_dev);
			t4 = claim_space(label_nodes);
			label_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(input, "type", "checkbox");
			add_location(input, file, 172, 4, 3508);
			add_location(button, file, 174, 4, 3584);
			add_location(label, file, 167, 3, 3404);
			this.first = label;
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, label, anchor);
			append_dev(label, input);
			input.checked = /*todo*/ ctx[13].done;
			append_dev(label, t0);
			append_dev(label, t1);
			append_dev(label, t2);
			append_dev(label, button);
			append_dev(button, t3);
			append_dev(label, t4);
			current = true;
			if (remount) run_all(dispose);

			dispose = [
				listen_dev(input, "change", input_change_handler_1),
				listen_dev(button, "click", click_handler, false, false, false)
			];
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*todos*/ 2) {
				input.checked = /*todo*/ ctx[13].done;
			}

			if ((!current || dirty & /*todos*/ 2) && t1_value !== (t1_value = /*todo*/ ctx[13].description + "")) set_data_dev(t1, t1_value);
		},
		r: function measure() {
			rect = label.getBoundingClientRect();
		},
		f: function fix() {
			fix_position(label);
			stop_animation();
			add_transform(label, rect);
		},
		a: function animate() {
			stop_animation();
			stop_animation = create_animation(label, rect, flip, {});
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (label_outro) label_outro.end(1);
				if (!label_intro) label_intro = create_in_transition(label, /*receive*/ ctx[3], { key: /*todo*/ ctx[13].id });
				label_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			if (label_intro) label_intro.invalidate();
			label_outro = create_out_transition(label, /*send*/ ctx[2], { key: /*todo*/ ctx[13].id });
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(label);
			if (detaching && label_outro) label_outro.end();
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(167:2) {#each todos.filter(t => !t.done) as todo (todo.id)}",
		ctx
	});

	return block;
}

// (182:2) {#each todos.filter(t => t.done) as todo (todo.id)}
function create_each_block(key_1, ctx) {
	let label;
	let input;
	let t0;
	let t1_value = /*todo*/ ctx[13].description + "";
	let t1;
	let t2;
	let button;
	let t3;
	let t4;
	let label_intro;
	let label_outro;
	let rect;
	let stop_animation = noop;
	let current;
	let dispose;

	function input_change_handler_2() {
		/*input_change_handler_2*/ ctx[11].call(input, /*todo*/ ctx[13]);
	}

	function click_handler_1(...args) {
		return /*click_handler_1*/ ctx[12](/*todo*/ ctx[13], ...args);
	}

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			label = element("label");
			input = element("input");
			t0 = space();
			t1 = text(t1_value);
			t2 = space();
			button = element("button");
			t3 = text("x");
			t4 = space();
			this.h();
		},
		l: function claim(nodes) {
			label = claim_element(nodes, "LABEL", {});
			var label_nodes = children(label);
			input = claim_element(label_nodes, "INPUT", { type: true });
			t0 = claim_space(label_nodes);
			t1 = claim_text(label_nodes, t1_value);
			t2 = claim_space(label_nodes);
			button = claim_element(label_nodes, "BUTTON", {});
			var button_nodes = children(button);
			t3 = claim_text(button_nodes, "x");
			button_nodes.forEach(detach_dev);
			t4 = claim_space(label_nodes);
			label_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(input, "type", "checkbox");
			add_location(input, file, 187, 4, 3872);
			add_location(button, file, 189, 4, 3948);
			add_location(label, file, 182, 3, 3768);
			this.first = label;
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, label, anchor);
			append_dev(label, input);
			input.checked = /*todo*/ ctx[13].done;
			append_dev(label, t0);
			append_dev(label, t1);
			append_dev(label, t2);
			append_dev(label, button);
			append_dev(button, t3);
			append_dev(label, t4);
			current = true;
			if (remount) run_all(dispose);

			dispose = [
				listen_dev(input, "change", input_change_handler_2),
				listen_dev(button, "click", click_handler_1, false, false, false)
			];
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*todos*/ 2) {
				input.checked = /*todo*/ ctx[13].done;
			}

			if ((!current || dirty & /*todos*/ 2) && t1_value !== (t1_value = /*todo*/ ctx[13].description + "")) set_data_dev(t1, t1_value);
		},
		r: function measure() {
			rect = label.getBoundingClientRect();
		},
		f: function fix() {
			fix_position(label);
			stop_animation();
			add_transform(label, rect);
		},
		a: function animate() {
			stop_animation();
			stop_animation = create_animation(label, rect, flip, {});
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (label_outro) label_outro.end(1);
				if (!label_intro) label_intro = create_in_transition(label, /*receive*/ ctx[3], { key: /*todo*/ ctx[13].id });
				label_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			if (label_intro) label_intro.invalidate();
			label_outro = create_out_transition(label, /*send*/ ctx[2], { key: /*todo*/ ctx[13].id });
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(label);
			if (detaching && label_outro) label_outro.end();
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(182:2) {#each todos.filter(t => t.done) as todo (todo.id)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let link;
	let t0;
	let h1;
	let t1;
	let t2;
	let p;
	let t3;
	let t4;
	let hr;
	let t5;
	let br;
	let t6;
	let label;
	let input;
	let t7;
	let t8;
	let if_block_anchor;
	let current;
	let dispose;
	let if_block = /*visible*/ ctx[0] && create_if_block(ctx);

	const block = {
		c: function create() {
			link = element("link");
			t0 = space();
			h1 = element("h1");
			t1 = text("Welcome!!");
			t2 = space();
			p = element("p");
			t3 = text("Information for you :");
			t4 = space();
			hr = element("hr");
			t5 = space();
			br = element("br");
			t6 = space();
			label = element("label");
			input = element("input");
			t7 = text("\r\n\tKlik untuk tampilkan/sembunyikan");
			t8 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-18sii7\"]", document.head);
			link = claim_element(head_nodes, "LINK", { rel: true, href: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Welcome!!");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "Information for you :");
			p_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			hr = claim_element(nodes, "HR", {});
			t5 = claim_space(nodes);
			br = claim_element(nodes, "BR", {});
			t6 = claim_space(nodes);
			label = claim_element(nodes, "LABEL", {});
			var label_nodes = children(label);
			input = claim_element(label_nodes, "INPUT", { type: true });
			t7 = claim_text(label_nodes, "\r\n\tKlik untuk tampilkan/sembunyikan");
			label_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			attr_dev(link, "rel", "stylesheet");
			attr_dev(link, "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
			add_location(link, file, 1, 2, 17);
			document.title = "Information";
			add_location(h1, file, 5, 0, 169);
			add_location(p, file, 7, 0, 191);
			add_location(hr, file, 82, 0, 2006);
			add_location(br, file, 83, 0, 2013);
			attr_dev(input, "type", "checkbox");
			add_location(input, file, 86, 1, 2032);
			add_location(label, file, 85, 0, 2022);
		},
		m: function mount(target, anchor, remount) {
			append_dev(document.head, link);
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, hr, anchor);
			insert_dev(target, t5, anchor);
			insert_dev(target, br, anchor);
			insert_dev(target, t6, anchor);
			insert_dev(target, label, anchor);
			append_dev(label, input);
			input.checked = /*visible*/ ctx[0];
			append_dev(label, t7);
			insert_dev(target, t8, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
			if (remount) dispose();
			dispose = listen_dev(input, "change", /*input_change_handler*/ ctx[7]);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*visible*/ 1) {
				input.checked = /*visible*/ ctx[0];
			}

			if (/*visible*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);
					transition_in(if_block, 1);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			detach_dev(link);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(hr);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(br);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(label);
			if (detaching) detach_dev(t8);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const func = t => !t.done;
const func_1 = t => t.done;

function instance($$self, $$props, $$invalidate) {
	let visible = true;

	const [send, receive] = crossfade({
		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === "none" ? "" : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

	let todos = [
		{
			id: 1,
			done: false,
			description: "write some docs"
		},
		{
			id: 2,
			done: false,
			description: "start writing JSConf talk"
		},
		{
			id: 3,
			done: true,
			description: "buy some milk"
		},
		{
			id: 4,
			done: false,
			description: "mow the lawn"
		},
		{
			id: 5,
			done: false,
			description: "feed the turtle"
		},
		{
			id: 6,
			done: false,
			description: "fix some bugs"
		}
	];

	let uid = todos.length + 1;

	function add(input) {
		const todo = {
			id: uid++,
			done: false,
			description: input.value
		};

		$$invalidate(1, todos = [todo, ...todos]);
		input.value = "";
	}

	function remove(todo) {
		$$invalidate(1, todos = todos.filter(t => t !== todo));
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Information> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Information", $$slots, []);

	function input_change_handler() {
		visible = this.checked;
		$$invalidate(0, visible);
	}

	const keydown_handler = event => event.which === 13 && add(event.target);

	function input_change_handler_1(todo) {
		todo.done = this.checked;
		$$invalidate(1, todos);
	}

	const click_handler = todo => remove(todo);

	function input_change_handler_2(todo) {
		todo.done = this.checked;
		$$invalidate(1, todos);
	}

	const click_handler_1 = todo => remove(todo);

	$$self.$capture_state = () => ({
		fly,
		visible,
		quintOut,
		crossfade,
		flip,
		send,
		receive,
		todos,
		uid,
		add,
		remove
	});

	$$self.$inject_state = $$props => {
		if ("visible" in $$props) $$invalidate(0, visible = $$props.visible);
		if ("todos" in $$props) $$invalidate(1, todos = $$props.todos);
		if ("uid" in $$props) uid = $$props.uid;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		visible,
		todos,
		send,
		receive,
		add,
		remove,
		uid,
		input_change_handler,
		keydown_handler,
		input_change_handler_1,
		click_handler,
		input_change_handler_2,
		click_handler_1
	];
}

class Information extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Information",
			options,
			id: create_fragment.name
		});
	}
}

export default Information;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mb3JtYXRpb24uZjk1NTcxMWIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvZWFzaW5nL2luZGV4Lm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvdHJhbnNpdGlvbi9pbmRleC5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL2FuaW1hdGUvaW5kZXgubWpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmZvcm1hdGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgaWRlbnRpdHkgYXMgbGluZWFyIH0gZnJvbSAnLi4vaW50ZXJuYWwnO1xuXG4vKlxuQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZGVzbFxuRGlzdHJpYnV0ZWQgdW5kZXIgTUlUIExpY2Vuc2UgaHR0cHM6Ly9naXRodWIuY29tL21hdHRkZXNsL2Vhc2VzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiovXG5mdW5jdGlvbiBiYWNrSW5PdXQodCkge1xuICAgIGNvbnN0IHMgPSAxLjcwMTU4ICogMS41MjU7XG4gICAgaWYgKCh0ICo9IDIpIDwgMSlcbiAgICAgICAgcmV0dXJuIDAuNSAqICh0ICogdCAqICgocyArIDEpICogdCAtIHMpKTtcbiAgICByZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqICgocyArIDEpICogdCArIHMpICsgMik7XG59XG5mdW5jdGlvbiBiYWNrSW4odCkge1xuICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgIHJldHVybiB0ICogdCAqICgocyArIDEpICogdCAtIHMpO1xufVxuZnVuY3Rpb24gYmFja091dCh0KSB7XG4gICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgcmV0dXJuIC0tdCAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDE7XG59XG5mdW5jdGlvbiBib3VuY2VPdXQodCkge1xuICAgIGNvbnN0IGEgPSA0LjAgLyAxMS4wO1xuICAgIGNvbnN0IGIgPSA4LjAgLyAxMS4wO1xuICAgIGNvbnN0IGMgPSA5LjAgLyAxMC4wO1xuICAgIGNvbnN0IGNhID0gNDM1Ni4wIC8gMzYxLjA7XG4gICAgY29uc3QgY2IgPSAzNTQ0Mi4wIC8gMTgwNS4wO1xuICAgIGNvbnN0IGNjID0gMTYwNjEuMCAvIDE4MDUuMDtcbiAgICBjb25zdCB0MiA9IHQgKiB0O1xuICAgIHJldHVybiB0IDwgYVxuICAgICAgICA/IDcuNTYyNSAqIHQyXG4gICAgICAgIDogdCA8IGJcbiAgICAgICAgICAgID8gOS4wNzUgKiB0MiAtIDkuOSAqIHQgKyAzLjRcbiAgICAgICAgICAgIDogdCA8IGNcbiAgICAgICAgICAgICAgICA/IGNhICogdDIgLSBjYiAqIHQgKyBjY1xuICAgICAgICAgICAgICAgIDogMTAuOCAqIHQgKiB0IC0gMjAuNTIgKiB0ICsgMTAuNzI7XG59XG5mdW5jdGlvbiBib3VuY2VJbk91dCh0KSB7XG4gICAgcmV0dXJuIHQgPCAwLjVcbiAgICAgICAgPyAwLjUgKiAoMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQgKiAyLjApKVxuICAgICAgICA6IDAuNSAqIGJvdW5jZU91dCh0ICogMi4wIC0gMS4wKSArIDAuNTtcbn1cbmZ1bmN0aW9uIGJvdW5jZUluKHQpIHtcbiAgICByZXR1cm4gMS4wIC0gYm91bmNlT3V0KDEuMCAtIHQpO1xufVxuZnVuY3Rpb24gY2lyY0luT3V0KHQpIHtcbiAgICBpZiAoKHQgKj0gMikgPCAxKVxuICAgICAgICByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpO1xuICAgIHJldHVybiAwLjUgKiAoTWF0aC5zcXJ0KDEgLSAodCAtPSAyKSAqIHQpICsgMSk7XG59XG5mdW5jdGlvbiBjaXJjSW4odCkge1xuICAgIHJldHVybiAxLjAgLSBNYXRoLnNxcnQoMS4wIC0gdCAqIHQpO1xufVxuZnVuY3Rpb24gY2lyY091dCh0KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gLS10ICogdCk7XG59XG5mdW5jdGlvbiBjdWJpY0luT3V0KHQpIHtcbiAgICByZXR1cm4gdCA8IDAuNSA/IDQuMCAqIHQgKiB0ICogdCA6IDAuNSAqIE1hdGgucG93KDIuMCAqIHQgLSAyLjAsIDMuMCkgKyAxLjA7XG59XG5mdW5jdGlvbiBjdWJpY0luKHQpIHtcbiAgICByZXR1cm4gdCAqIHQgKiB0O1xufVxuZnVuY3Rpb24gY3ViaWNPdXQodCkge1xuICAgIGNvbnN0IGYgPSB0IC0gMS4wO1xuICAgIHJldHVybiBmICogZiAqIGYgKyAxLjA7XG59XG5mdW5jdGlvbiBlbGFzdGljSW5PdXQodCkge1xuICAgIHJldHVybiB0IDwgMC41XG4gICAgICAgID8gMC41ICpcbiAgICAgICAgICAgIE1hdGguc2luKCgoKzEzLjAgKiBNYXRoLlBJKSAvIDIpICogMi4wICogdCkgKlxuICAgICAgICAgICAgTWF0aC5wb3coMi4wLCAxMC4wICogKDIuMCAqIHQgLSAxLjApKVxuICAgICAgICA6IDAuNSAqXG4gICAgICAgICAgICBNYXRoLnNpbigoKC0xMy4wICogTWF0aC5QSSkgLyAyKSAqICgyLjAgKiB0IC0gMS4wICsgMS4wKSkgKlxuICAgICAgICAgICAgTWF0aC5wb3coMi4wLCAtMTAuMCAqICgyLjAgKiB0IC0gMS4wKSkgK1xuICAgICAgICAgICAgMS4wO1xufVxuZnVuY3Rpb24gZWxhc3RpY0luKHQpIHtcbiAgICByZXR1cm4gTWF0aC5zaW4oKDEzLjAgKiB0ICogTWF0aC5QSSkgLyAyKSAqIE1hdGgucG93KDIuMCwgMTAuMCAqICh0IC0gMS4wKSk7XG59XG5mdW5jdGlvbiBlbGFzdGljT3V0KHQpIHtcbiAgICByZXR1cm4gKE1hdGguc2luKCgtMTMuMCAqICh0ICsgMS4wKSAqIE1hdGguUEkpIC8gMikgKiBNYXRoLnBvdygyLjAsIC0xMC4wICogdCkgKyAxLjApO1xufVxuZnVuY3Rpb24gZXhwb0luT3V0KHQpIHtcbiAgICByZXR1cm4gdCA9PT0gMC4wIHx8IHQgPT09IDEuMFxuICAgICAgICA/IHRcbiAgICAgICAgOiB0IDwgMC41XG4gICAgICAgICAgICA/ICswLjUgKiBNYXRoLnBvdygyLjAsIDIwLjAgKiB0IC0gMTAuMClcbiAgICAgICAgICAgIDogLTAuNSAqIE1hdGgucG93KDIuMCwgMTAuMCAtIHQgKiAyMC4wKSArIDEuMDtcbn1cbmZ1bmN0aW9uIGV4cG9Jbih0KSB7XG4gICAgcmV0dXJuIHQgPT09IDAuMCA/IHQgOiBNYXRoLnBvdygyLjAsIDEwLjAgKiAodCAtIDEuMCkpO1xufVxuZnVuY3Rpb24gZXhwb091dCh0KSB7XG4gICAgcmV0dXJuIHQgPT09IDEuMCA/IHQgOiAxLjAgLSBNYXRoLnBvdygyLjAsIC0xMC4wICogdCk7XG59XG5mdW5jdGlvbiBxdWFkSW5PdXQodCkge1xuICAgIHQgLz0gMC41O1xuICAgIGlmICh0IDwgMSlcbiAgICAgICAgcmV0dXJuIDAuNSAqIHQgKiB0O1xuICAgIHQtLTtcbiAgICByZXR1cm4gLTAuNSAqICh0ICogKHQgLSAyKSAtIDEpO1xufVxuZnVuY3Rpb24gcXVhZEluKHQpIHtcbiAgICByZXR1cm4gdCAqIHQ7XG59XG5mdW5jdGlvbiBxdWFkT3V0KHQpIHtcbiAgICByZXR1cm4gLXQgKiAodCAtIDIuMCk7XG59XG5mdW5jdGlvbiBxdWFydEluT3V0KHQpIHtcbiAgICByZXR1cm4gdCA8IDAuNVxuICAgICAgICA/ICs4LjAgKiBNYXRoLnBvdyh0LCA0LjApXG4gICAgICAgIDogLTguMCAqIE1hdGgucG93KHQgLSAxLjAsIDQuMCkgKyAxLjA7XG59XG5mdW5jdGlvbiBxdWFydEluKHQpIHtcbiAgICByZXR1cm4gTWF0aC5wb3codCwgNC4wKTtcbn1cbmZ1bmN0aW9uIHF1YXJ0T3V0KHQpIHtcbiAgICByZXR1cm4gTWF0aC5wb3codCAtIDEuMCwgMy4wKSAqICgxLjAgLSB0KSArIDEuMDtcbn1cbmZ1bmN0aW9uIHF1aW50SW5PdXQodCkge1xuICAgIGlmICgodCAqPSAyKSA8IDEpXG4gICAgICAgIHJldHVybiAwLjUgKiB0ICogdCAqIHQgKiB0ICogdDtcbiAgICByZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqIHQgKiB0ICogdCArIDIpO1xufVxuZnVuY3Rpb24gcXVpbnRJbih0KSB7XG4gICAgcmV0dXJuIHQgKiB0ICogdCAqIHQgKiB0O1xufVxuZnVuY3Rpb24gcXVpbnRPdXQodCkge1xuICAgIHJldHVybiAtLXQgKiB0ICogdCAqIHQgKiB0ICsgMTtcbn1cbmZ1bmN0aW9uIHNpbmVJbk91dCh0KSB7XG4gICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHQpIC0gMSk7XG59XG5mdW5jdGlvbiBzaW5lSW4odCkge1xuICAgIGNvbnN0IHYgPSBNYXRoLmNvcyh0ICogTWF0aC5QSSAqIDAuNSk7XG4gICAgaWYgKE1hdGguYWJzKHYpIDwgMWUtMTQpXG4gICAgICAgIHJldHVybiAxO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIDEgLSB2O1xufVxuZnVuY3Rpb24gc2luZU91dCh0KSB7XG4gICAgcmV0dXJuIE1hdGguc2luKCh0ICogTWF0aC5QSSkgLyAyKTtcbn1cblxuZXhwb3J0IHsgYmFja0luLCBiYWNrSW5PdXQsIGJhY2tPdXQsIGJvdW5jZUluLCBib3VuY2VJbk91dCwgYm91bmNlT3V0LCBjaXJjSW4sIGNpcmNJbk91dCwgY2lyY091dCwgY3ViaWNJbiwgY3ViaWNJbk91dCwgY3ViaWNPdXQsIGVsYXN0aWNJbiwgZWxhc3RpY0luT3V0LCBlbGFzdGljT3V0LCBleHBvSW4sIGV4cG9Jbk91dCwgZXhwb091dCwgcXVhZEluLCBxdWFkSW5PdXQsIHF1YWRPdXQsIHF1YXJ0SW4sIHF1YXJ0SW5PdXQsIHF1YXJ0T3V0LCBxdWludEluLCBxdWludEluT3V0LCBxdWludE91dCwgc2luZUluLCBzaW5lSW5PdXQsIHNpbmVPdXQgfTtcbiIsImltcG9ydCB7IGN1YmljSW5PdXQsIGxpbmVhciwgY3ViaWNPdXQgfSBmcm9tICcuLi9lYXNpbmcnO1xuaW1wb3J0IHsgaXNfZnVuY3Rpb24sIGFzc2lnbiB9IGZyb20gJy4uL2ludGVybmFsJztcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxuXG5mdW5jdGlvbiBibHVyKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNJbk91dCwgYW1vdW50ID0gNSwgb3BhY2l0eSA9IDAgfSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB0YXJnZXRfb3BhY2l0eSA9ICtzdHlsZS5vcGFjaXR5O1xuICAgIGNvbnN0IGYgPSBzdHlsZS5maWx0ZXIgPT09ICdub25lJyA/ICcnIDogc3R5bGUuZmlsdGVyO1xuICAgIGNvbnN0IG9kID0gdGFyZ2V0X29wYWNpdHkgKiAoMSAtIG9wYWNpdHkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlbGF5LFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzaW5nLFxuICAgICAgICBjc3M6IChfdCwgdSkgPT4gYG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX07IGZpbHRlcjogJHtmfSBibHVyKCR7dSAqIGFtb3VudH1weCk7YFxuICAgIH07XG59XG5mdW5jdGlvbiBmYWRlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gbGluZWFyIH0pIHtcbiAgICBjb25zdCBvID0gK2dldENvbXB1dGVkU3R5bGUobm9kZSkub3BhY2l0eTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZyxcbiAgICAgICAgY3NzOiB0ID0+IGBvcGFjaXR5OiAke3QgKiBvfWBcbiAgICB9O1xufVxuZnVuY3Rpb24gZmx5KG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQsIHggPSAwLCB5ID0gMCwgb3BhY2l0eSA9IDAgfSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB0YXJnZXRfb3BhY2l0eSA9ICtzdHlsZS5vcGFjaXR5O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgY29uc3Qgb2QgPSB0YXJnZXRfb3BhY2l0eSAqICgxIC0gb3BhY2l0eSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKHQsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgkeygxIC0gdCkgKiB4fXB4LCAkeygxIC0gdCkgKiB5fXB4KTtcblx0XHRcdG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX1gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNsaWRlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQgfSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCBvcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgY29uc3QgaGVpZ2h0ID0gcGFyc2VGbG9hdChzdHlsZS5oZWlnaHQpO1xuICAgIGNvbnN0IHBhZGRpbmdfdG9wID0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nVG9wKTtcbiAgICBjb25zdCBwYWRkaW5nX2JvdHRvbSA9IHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gICAgY29uc3QgbWFyZ2luX3RvcCA9IHBhcnNlRmxvYXQoc3R5bGUubWFyZ2luVG9wKTtcbiAgICBjb25zdCBtYXJnaW5fYm90dG9tID0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Cb3R0b20pO1xuICAgIGNvbnN0IGJvcmRlcl90b3Bfd2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlclRvcFdpZHRoKTtcbiAgICBjb25zdCBib3JkZXJfYm90dG9tX3dpZHRoID0gcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJCb3R0b21XaWR0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogdCA9PiBgb3ZlcmZsb3c6IGhpZGRlbjtgICtcbiAgICAgICAgICAgIGBvcGFjaXR5OiAke01hdGgubWluKHQgKiAyMCwgMSkgKiBvcGFjaXR5fTtgICtcbiAgICAgICAgICAgIGBoZWlnaHQ6ICR7dCAqIGhlaWdodH1weDtgICtcbiAgICAgICAgICAgIGBwYWRkaW5nLXRvcDogJHt0ICogcGFkZGluZ190b3B9cHg7YCArXG4gICAgICAgICAgICBgcGFkZGluZy1ib3R0b206ICR7dCAqIHBhZGRpbmdfYm90dG9tfXB4O2AgK1xuICAgICAgICAgICAgYG1hcmdpbi10b3A6ICR7dCAqIG1hcmdpbl90b3B9cHg7YCArXG4gICAgICAgICAgICBgbWFyZ2luLWJvdHRvbTogJHt0ICogbWFyZ2luX2JvdHRvbX1weDtgICtcbiAgICAgICAgICAgIGBib3JkZXItdG9wLXdpZHRoOiAke3QgKiBib3JkZXJfdG9wX3dpZHRofXB4O2AgK1xuICAgICAgICAgICAgYGJvcmRlci1ib3R0b20td2lkdGg6ICR7dCAqIGJvcmRlcl9ib3R0b21fd2lkdGh9cHg7YFxuICAgIH07XG59XG5mdW5jdGlvbiBzY2FsZShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGN1YmljT3V0LCBzdGFydCA9IDAsIG9wYWNpdHkgPSAwIH0pIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgY29uc3QgdGFyZ2V0X29wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgIGNvbnN0IHNkID0gMSAtIHN0YXJ0O1xuICAgIGNvbnN0IG9kID0gdGFyZ2V0X29wYWNpdHkgKiAoMSAtIG9wYWNpdHkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlbGF5LFxuICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgZWFzaW5nLFxuICAgICAgICBjc3M6IChfdCwgdSkgPT4gYFxuXHRcdFx0dHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gc2NhbGUoJHsxIC0gKHNkICogdSl9KTtcblx0XHRcdG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX1cblx0XHRgXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGRyYXcobm9kZSwgeyBkZWxheSA9IDAsIHNwZWVkLCBkdXJhdGlvbiwgZWFzaW5nID0gY3ViaWNJbk91dCB9KSB7XG4gICAgY29uc3QgbGVuID0gbm9kZS5nZXRUb3RhbExlbmd0aCgpO1xuICAgIGlmIChkdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzcGVlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IDgwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gbGVuIC8gc3BlZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24obGVuKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKHQsIHUpID0+IGBzdHJva2UtZGFzaGFycmF5OiAke3QgKiBsZW59ICR7dSAqIGxlbn1gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyb3NzZmFkZShfYSkge1xuICAgIHZhciB7IGZhbGxiYWNrIH0gPSBfYSwgZGVmYXVsdHMgPSBfX3Jlc3QoX2EsIFtcImZhbGxiYWNrXCJdKTtcbiAgICBjb25zdCB0b19yZWNlaXZlID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHRvX3NlbmQgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gY3Jvc3NmYWRlKGZyb20sIG5vZGUsIHBhcmFtcykge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSBkID0+IE1hdGguc3FydChkKSAqIDMwLCBlYXNpbmcgPSBjdWJpY091dCB9ID0gYXNzaWduKGFzc2lnbih7fSwgZGVmYXVsdHMpLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGR4ID0gZnJvbS5sZWZ0IC0gdG8ubGVmdDtcbiAgICAgICAgY29uc3QgZHkgPSBmcm9tLnRvcCAtIHRvLnRvcDtcbiAgICAgICAgY29uc3QgZHcgPSBmcm9tLndpZHRoIC8gdG8ud2lkdGg7XG4gICAgICAgIGNvbnN0IGRoID0gZnJvbS5oZWlnaHQgLyB0by5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5LFxuICAgICAgICAgICAgZHVyYXRpb246IGlzX2Z1bmN0aW9uKGR1cmF0aW9uKSA/IGR1cmF0aW9uKGQpIDogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmcsXG4gICAgICAgICAgICBjc3M6ICh0LCB1KSA9PiBgXG5cdFx0XHRcdG9wYWNpdHk6ICR7dCAqIG9wYWNpdHl9O1xuXHRcdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcblx0XHRcdFx0dHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7dSAqIGR4fXB4LCR7dSAqIGR5fXB4KSBzY2FsZSgke3QgKyAoMSAtIHQpICogZHd9LCAke3QgKyAoMSAtIHQpICogZGh9KTtcblx0XHRcdGBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbihpdGVtcywgY291bnRlcnBhcnRzLCBpbnRybykge1xuICAgICAgICByZXR1cm4gKG5vZGUsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgaXRlbXMuc2V0KHBhcmFtcy5rZXksIHtcbiAgICAgICAgICAgICAgICByZWN0OiBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJwYXJ0cy5oYXMocGFyYW1zLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyByZWN0IH0gPSBjb3VudGVycGFydHMuZ2V0KHBhcmFtcy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydHMuZGVsZXRlKHBhcmFtcy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3Jvc3NmYWRlKHJlY3QsIG5vZGUsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBub2RlIGlzIGRpc2FwcGVhcmluZyBhbHRvZ2V0aGVyXG4gICAgICAgICAgICAgICAgLy8gKGkuZS4gd2Fzbid0IGNsYWltZWQgYnkgdGhlIG90aGVyIGxpc3QpXG4gICAgICAgICAgICAgICAgLy8gdGhlbiB3ZSBuZWVkIHRvIHN1cHBseSBhbiBvdXRyb1xuICAgICAgICAgICAgICAgIGl0ZW1zLmRlbGV0ZShwYXJhbXMua2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsbGJhY2sgJiYgZmFsbGJhY2sobm9kZSwgcGFyYW1zLCBpbnRybyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgICB0cmFuc2l0aW9uKHRvX3NlbmQsIHRvX3JlY2VpdmUsIGZhbHNlKSxcbiAgICAgICAgdHJhbnNpdGlvbih0b19yZWNlaXZlLCB0b19zZW5kLCB0cnVlKVxuICAgIF07XG59XG5cbmV4cG9ydCB7IGJsdXIsIGNyb3NzZmFkZSwgZHJhdywgZmFkZSwgZmx5LCBzY2FsZSwgc2xpZGUgfTtcbiIsImltcG9ydCB7IGN1YmljT3V0IH0gZnJvbSAnLi4vZWFzaW5nJztcbmltcG9ydCB7IGlzX2Z1bmN0aW9uIH0gZnJvbSAnLi4vaW50ZXJuYWwnO1xuXG5mdW5jdGlvbiBmbGlwKG5vZGUsIGFuaW1hdGlvbiwgcGFyYW1zKSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgY29uc3Qgc2NhbGVYID0gYW5pbWF0aW9uLmZyb20ud2lkdGggLyBub2RlLmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IHNjYWxlWSA9IGFuaW1hdGlvbi5mcm9tLmhlaWdodCAvIG5vZGUuY2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IGR4ID0gKGFuaW1hdGlvbi5mcm9tLmxlZnQgLSBhbmltYXRpb24udG8ubGVmdCkgLyBzY2FsZVg7XG4gICAgY29uc3QgZHkgPSAoYW5pbWF0aW9uLmZyb20udG9wIC0gYW5pbWF0aW9uLnRvLnRvcCkgLyBzY2FsZVk7XG4gICAgY29uc3QgZCA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgY29uc3QgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gKGQpID0+IE1hdGguc3FydChkKSAqIDEyMCwgZWFzaW5nID0gY3ViaWNPdXQgfSA9IHBhcmFtcztcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgZHVyYXRpb246IGlzX2Z1bmN0aW9uKGR1cmF0aW9uKSA/IGR1cmF0aW9uKGQpIDogZHVyYXRpb24sXG4gICAgICAgIGVhc2luZyxcbiAgICAgICAgY3NzOiAoX3QsIHUpID0+IGB0cmFuc2Zvcm06ICR7dHJhbnNmb3JtfSB0cmFuc2xhdGUoJHt1ICogZHh9cHgsICR7dSAqIGR5fXB4KTtgXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgZmxpcCB9O1xuIiwiPHN2ZWx0ZTpoZWFkPlxyXG4gIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI+XHJcblx0PHRpdGxlPkluZm9ybWF0aW9uPC90aXRsZT5cclxuPC9zdmVsdGU6aGVhZD5cclxuXHJcbjxoMT5XZWxjb21lISE8L2gxPlxyXG5cclxuPHA+SW5mb3JtYXRpb24gZm9yIHlvdSA6IDwvcD5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc3ZlbHRlc3RyYXAnO1xyXG4gIC8vIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4gYWxlcnQoJ0kgd2FybmVkIHlvdSEnKTtcclxuXHJcbiAgaW1wb3J0IHsgZmx5IH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xyXG4gIGxldCB2aXNpYmxlID0gdHJ1ZTtcclxuICBcclxuICBpbXBvcnQgeyBxdWludE91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xyXG5cdGltcG9ydCB7IGNyb3NzZmFkZSB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJztcclxuXHRpbXBvcnQgeyBmbGlwIH0gZnJvbSAnc3ZlbHRlL2FuaW1hdGUnO1xyXG5cclxuXHRjb25zdCBbc2VuZCwgcmVjZWl2ZV0gPSBjcm9zc2ZhZGUoe1xyXG5cdFx0ZmFsbGJhY2sobm9kZSwgcGFyYW1zKSB7XHJcblx0XHRcdGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcclxuXHRcdFx0Y29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZHVyYXRpb246IDYwMCxcclxuXHRcdFx0XHRlYXNpbmc6IHF1aW50T3V0LFxyXG5cdFx0XHRcdGNzczogdCA9PiBgXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06ICR7dHJhbnNmb3JtfSBzY2FsZSgke3R9KTtcclxuXHRcdFx0XHRcdG9wYWNpdHk6ICR7dH1cclxuXHRcdFx0XHRgXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdGxldCB0b2RvcyA9IFtcclxuXHRcdHsgaWQ6IDEsIGRvbmU6IGZhbHNlLCBkZXNjcmlwdGlvbjogJ3dyaXRlIHNvbWUgZG9jcycgfSxcclxuXHRcdHsgaWQ6IDIsIGRvbmU6IGZhbHNlLCBkZXNjcmlwdGlvbjogJ3N0YXJ0IHdyaXRpbmcgSlNDb25mIHRhbGsnIH0sXHJcblx0XHR7IGlkOiAzLCBkb25lOiB0cnVlLCBkZXNjcmlwdGlvbjogJ2J1eSBzb21lIG1pbGsnIH0sXHJcblx0XHR7IGlkOiA0LCBkb25lOiBmYWxzZSwgZGVzY3JpcHRpb246ICdtb3cgdGhlIGxhd24nIH0sXHJcblx0XHR7IGlkOiA1LCBkb25lOiBmYWxzZSwgZGVzY3JpcHRpb246ICdmZWVkIHRoZSB0dXJ0bGUnIH0sXHJcblx0XHR7IGlkOiA2LCBkb25lOiBmYWxzZSwgZGVzY3JpcHRpb246ICdmaXggc29tZSBidWdzJyB9LFxyXG5cdF07XHJcblxyXG5cdGxldCB1aWQgPSB0b2Rvcy5sZW5ndGggKyAxO1xyXG5cclxuXHRmdW5jdGlvbiBhZGQoaW5wdXQpIHtcclxuXHRcdGNvbnN0IHRvZG8gPSB7XHJcblx0XHRcdGlkOiB1aWQrKyxcclxuXHRcdFx0ZG9uZTogZmFsc2UsXHJcblx0XHRcdGRlc2NyaXB0aW9uOiBpbnB1dC52YWx1ZVxyXG5cdFx0fTtcclxuXHJcblx0XHR0b2RvcyA9IFt0b2RvLCAuLi50b2Rvc107XHJcblx0XHRpbnB1dC52YWx1ZSA9ICcnO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcmVtb3ZlKHRvZG8pIHtcclxuXHRcdHRvZG9zID0gdG9kb3MuZmlsdGVyKHQgPT4gdCAhPT0gdG9kbyk7XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjwhLS0gXHJcblxyXG48QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uOmNsaWNrPXsoKSA9PiAoaXNPcGVuID0gIWlzT3Blbil9IGNsYXNzPVwibWItM1wiPlxyXG4gIFRvZ2dsZVxyXG48L0J1dHRvbj5cclxuPEZhZGUge2lzT3Blbn0+XHJcbiAgPENhcmQgYm9keT5cclxuICAgIEFuaW0gcGFyaWF0dXIgY2xpY2hlIHJlcHJlaGVuZGVyaXQsIGVuaW0gZWl1c21vZCBoaWdoIGxpZmUgYWNjdXNhbXVzIHRlcnJ5XHJcbiAgICByaWNoYXJkc29uIGFkIHNxdWlkLiBOaWhpbCBhbmltIGtlZmZpeWVoIGhlbHZldGljYSwgY3JhZnQgYmVlciBsYWJvcmUgd2VzXHJcbiAgICBhbmRlcnNvbiBjcmVkIG5lc2NpdW50IHNhcGllbnRlIGVhIHByb2lkZW50LlxyXG4gIDwvQ2FyZD5cclxuPC9GYWRlPlxyXG5cclxuXHJcblxyXG48QnV0dG9uIGNvbG9yPVwiZGFuZ2VyXCIgb246Y2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICBEbyBOb3QgUHJlc3NcclxuPC9CdXR0b24+IC0tPlxyXG5cclxuPGhyLz5cclxuPGJyLz5cclxuXHJcbjxsYWJlbD5cclxuXHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgYmluZDpjaGVja2VkPXt2aXNpYmxlfT5cclxuXHRLbGlrIHVudHVrIHRhbXBpbGthbi9zZW1idW55aWthblxyXG48L2xhYmVsPlxyXG5cclxueyNpZiB2aXNpYmxlfVxyXG5cdDxwIHRyYW5zaXRpb246Zmx5PVwie3sgeTogMjAwLCBkdXJhdGlvbjogMjAwMCB9fVwiPlxyXG5cdFx0RmxpZXMgaW4gYW5kIG91dFxyXG5cdDwvcD5cclxuXHJcbjxzdHlsZT5cclxuXHQubmV3LXRvZG8ge1xyXG5cdFx0Zm9udC1zaXplOiAxLjRlbTtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0bWFyZ2luOiAyZW0gMCAxZW0gMDtcclxuXHR9XHJcblxyXG5cdC5ib2FyZCB7XHJcblx0XHRtYXgtd2lkdGg6IDM2ZW07XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHR9XHJcblxyXG5cdC5sZWZ0LCAucmlnaHQge1xyXG5cdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHR3aWR0aDogNTAlO1xyXG5cdFx0cGFkZGluZzogMCAxZW0gMCAwO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR9XHJcblxyXG5cdGgyIHtcclxuXHRcdGZvbnQtc2l6ZTogMmVtO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDIwMDtcclxuXHRcdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdH1cclxuXHJcblx0bGFiZWwge1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0Zm9udC1zaXplOiAxZW07XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdHBhZGRpbmc6IDAuNWVtO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG8gMC41ZW0gYXV0bztcclxuXHRcdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcblx0XHR1c2VyLXNlbGVjdDogbm9uZTtcclxuXHR9XHJcblxyXG5cdGlucHV0IHsgbWFyZ2luOiAwIH1cclxuXHJcblx0LnJpZ2h0IGxhYmVsIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYigxODAsMjQwLDEwMCk7XHJcblx0fVxyXG5cclxuXHRidXR0b24ge1xyXG5cdFx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdFx0aGVpZ2h0OiAxZW07XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0cGFkZGluZzogMCAwLjVlbTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRib3JkZXI6IG5vbmU7XHJcblx0XHRjb2xvcjogcmdiKDE3MCwzMCwzMCk7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xyXG5cdH1cclxuXHJcblx0bGFiZWw6aG92ZXIgYnV0dG9uIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG48L3N0eWxlPlxyXG5cclxuPGRpdiBjbGFzcz0nYm9hcmQnPlxyXG5cdDxpbnB1dFxyXG5cdFx0Y2xhc3M9XCJuZXctdG9kb1wiXHJcblx0XHRwbGFjZWhvbGRlcj1cIndoYXQgbmVlZHMgdG8gYmUgZG9uZT9cIlxyXG5cdFx0b246a2V5ZG93bj1cIntldmVudCA9PiBldmVudC53aGljaCA9PT0gMTMgJiYgYWRkKGV2ZW50LnRhcmdldCl9XCJcclxuXHQ+XHJcblxyXG5cdDxkaXYgY2xhc3M9J2xlZnQnPlxyXG5cdFx0PGgyPnRvZG88L2gyPlxyXG5cdFx0eyNlYWNoIHRvZG9zLmZpbHRlcih0ID0+ICF0LmRvbmUpIGFzIHRvZG8gKHRvZG8uaWQpfVxyXG5cdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRpbjpyZWNlaXZlPVwie3trZXk6IHRvZG8uaWR9fVwiXHJcblx0XHRcdFx0b3V0OnNlbmQ9XCJ7e2tleTogdG9kby5pZH19XCJcclxuXHRcdFx0XHRhbmltYXRlOmZsaXBcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPWNoZWNrYm94IGJpbmQ6Y2hlY2tlZD17dG9kby5kb25lfT5cclxuXHRcdFx0XHR7dG9kby5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHQ8YnV0dG9uIG9uOmNsaWNrPVwieygpID0+IHJlbW92ZSh0b2RvKX1cIj54PC9idXR0b24+XHJcblx0XHRcdDwvbGFiZWw+XHJcblx0XHR7L2VhY2h9XHJcblx0PC9kaXY+XHJcblxyXG5cdDxkaXYgY2xhc3M9J3JpZ2h0Jz5cclxuXHRcdDxoMj5kb25lPC9oMj5cclxuXHRcdHsjZWFjaCB0b2Rvcy5maWx0ZXIodCA9PiB0LmRvbmUpIGFzIHRvZG8gKHRvZG8uaWQpfVxyXG5cdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRpbjpyZWNlaXZlPVwie3trZXk6IHRvZG8uaWR9fVwiXHJcblx0XHRcdFx0b3V0OnNlbmQ9XCJ7e2tleTogdG9kby5pZH19XCJcclxuXHRcdFx0XHRhbmltYXRlOmZsaXBcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPWNoZWNrYm94IGJpbmQ6Y2hlY2tlZD17dG9kby5kb25lfT5cclxuXHRcdFx0XHR7dG9kby5kZXNjcmlwdGlvbn1cclxuXHRcdFx0XHQ8YnV0dG9uIG9uOmNsaWNrPVwieygpID0+IHJlbW92ZSh0b2RvKX1cIj54PC9idXR0b24+XHJcblx0XHRcdDwvbGFiZWw+XHJcblx0XHR7L2VhY2h9XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG57L2lmfVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUE2REEsU0FBUyxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3JCLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdB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
