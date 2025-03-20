<template>
  <form
    action="https://formspree.io/f/mgepyqjl"
    method="POST"
    class="bg-light p-4 p-md-5 contact-form"
  >
    <div class="form-group">
      <input
        name="name"
        type="text"
        class="form-control"
        placeholder="Your Name"
        required
      >
    </div>
    <div class="form-group">
      <input
        name="email"
        type="text"
        class="form-control"
        placeholder="Your Email"
        required
      >
    </div>
    <div class="form-group">
      <input
        name="subject"
        type="text"
        class="form-control"
        placeholder="Subject"
        required
      >
    </div>
    <div class="form-group">
      <textarea
        id="contact-message"
        name="message"
        cols="30"
        rows="7"
        class="form-control"
        placeholder="Message"
        required
      />
    </div>
    <div class="form-group">
      <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5">
    </div>
  </form>
</template>

<script>

export default {
  name: 'ContactForm'
};

</script>
