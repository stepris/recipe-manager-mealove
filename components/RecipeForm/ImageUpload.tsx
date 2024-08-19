export default function ImageUpload() {
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
  }

  return (
    <>
      <input type='file' id='imageUpload' />
      <label htmlFor='imageUpload'></label>
      <button onClick={handleSubmit}>upload image</button>
    </>
  );
}
