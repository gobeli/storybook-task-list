# Storybook JS
Developing UI components in isolation

<!-- .slide: class="master01" -->

---

# Use Cases
- Playground 
- Unabhängiges Entwickeln / Testen
- Dokumentation

<!-- .slide: class="master02" -->

----

## Integrationen

- React
- React Native
- Vue
- Angular
- Ember
- Svelte
- Mithril
- Riot
- Oder einfach plain JS/HTML

<!-- .slide: class="master02" -->

---

# Story erstellen
<!-- .slide: class="master03" -->
```js
export default { title: 'Button' };

export const Default = () => 
  `<button class="btn">Default Button</button>`;
```

----

```js
export default { title: 'Task' };

export const Default = () => ({
  components: { Task },
  template: '<task :task="task"></task>',
  data: () => ({ task: mockTask }),
});
```

<!-- .slide: class="master03" -->

---

# Slide 3

Lorem _ipsum_.

<!-- .slide: class="master04" -->

---

# Third Topic

<!-- .slide: class="master04 intro" -->

---

# Slide 4

Lorem _ipsum_.

<!-- .slide: class="master04" -->
