export default function SimpleForm({ formId, children, onSubmit, onChange }) {
  return (
    <>
      <form id={formId} onSubmit={onSubmit} onChange={onChange}>
        {children}
      </form>
    </>
  );
}
