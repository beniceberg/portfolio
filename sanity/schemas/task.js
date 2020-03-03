export default {
  name: "task",
  title: "Task",
  type: "object",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
  ],
}
