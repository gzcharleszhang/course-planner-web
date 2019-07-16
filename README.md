# Course Planner Web

### Libraries we are using

- Redux for state management
- Sagas for async calls
- Styled Components for styling instead of css
- bootstrap for UI library

### Best practices

- each component should be functional, use hooks for component states
- every standalone component should have its own `container`,
  `actions`, `types`, `reducers`, `sagas`
- `selectors` can be shared among components in the same area
