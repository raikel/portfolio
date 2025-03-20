<template>
  <div class="page-index">
    <home-hero />

    <home-about
      :profile="profile"
      :full-name="fullName"
      :birth-date="birthDate"
      :address="address"
      :email="email"
      :resume="resume"
      :anchor-id="navLinks.about.key"
    />

    <section :id="navLinks.resume.key" class="ftco-section ftco-no-pb goto-here">
      <div class="container">
        <div class="row">
          <div class="col-md-3 d-none d-sm-block">
            <nav id="navi">
              <ul>
                <li><a href="#resume-experience">Experience</a></li>
                <li><a href="#resume-education">Education</a></li>
                <li><a href="#resume-programming">Programming</a></li>
                <li><a href="#resume-skills">Skills</a></li>
              </ul>
            </nav>
          </div>

          <div class="col-md-9">
            <div id="resume-experience" class="page one">
              <h2 class="heading">
                Experience
              </h2>
              <resume-item
                v-for="(item, index) in experience"
                :key="index"
                :dates="item.dates"
                :title="item.position"
                :place="item.company"
                :activity="item.short"
                icon="flaticon-web-design"
              />
            </div>

            <div id="resume-education" class="page two">
              <h2 class="heading">
                Education
              </h2>
              <resume-item
                v-for="(item, index) in education"
                :key="index"
                :dates="item.dates"
                :title="item.title"
                :place="item.school"
                :activity="item.text"
                icon="flaticon-flasks"
              />
            </div>

            <div id="resume-programming" class="page three">
              <h2 class="heading">
                Programming
              </h2>
              <div class="row">
                <div
                  v-for="(item, index) in programming.languages"
                  :key="index"
                  class="col-md-6 animate-box"
                >
                  <skill-bar :title="item.name" :level="item.level" />
                </div>
              </div>
            </div>

            <div id="resume-skills" class="page four">
              <h2 class="heading">
                Skills
              </h2>
              <div class="d-flex flex-wrap mb-5">
                <template v-for="(skillsSection, i) in skills">
                  <skill-chip
                    v-for="(item, j) in skillsSection.items"
                    :key="i + '' + j"
                    :title="item.name"
                    :subtitle="'Experience ' + item.time"
                    :image="item.logo"
                    :size="64"
                    class="mb-3 mr-2"
                  />
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section v-if="showServices" :id="navLinks.services.key" class="ftco-section">
      <div class="container-fluid px-md-5">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-12 heading-section text-center ftco-animate">
            <h2 class="mb-4">
              Services
            </h2>
            <p>What I actually do</p>
          </div>
        </div>
        <div class="row">
          <div
            v-for="(service, i) in services"
            :key="i"
            class="col-md-4 d-flex ftco-animate"
          >
            <info-card
              :title="service.title"
              :info="service.info"
              :image="service.image"
            />
          </div>
        </div>
      </div>
    </section>

    <section :id="navLinks.projects.key" class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3 pb-sm-0">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h2 class="mb-4">
              Projects Gallery
            </h2>
            <p>Sample screens from some of my past projects</p>
          </div>
        </div>
        <div class="row d-flex">
          <div
            v-for="(project, i) in projects"
            :key="i"
            class="col-md-4 d-flex ftco-animate"
          >
            <post-item
              :title="project.title"
              :info="project.info"
              :image="project.image"
              :date="project.date"
              class="mb-4"
            />
          </div>
        </div>
      </div>
    </section>

    <section :id="navLinks.contact.key" class="ftco-section contact-section ftco-no-pb">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
            <h2 class="mb-4">
              Contact Me
            </h2>
            <p>Send me a message and I will answer you as soon as possible</p>
          </div>
        </div>

        <div class="row d-flex contact-info mb-5">
          <div class="col-md-6 col-lg-4 d-flex ftco-animate">
            <contact-item
              icon="icon-map-signs"
              title="Location"
              :info="address"
              :link="location"
            />
          </div>
          <div class="col-md-6 col-lg-4 d-flex ftco-animate">
            <contact-item
              icon="icon-paper-plane"
              title="Email Address"
              :info="email"
              :link="'mailto:' + email"
            />
          </div>
          <div class="col-md-6 col-lg-4 d-flex ftco-animate">
            <contact-item
              icon="icon-globe"
              title="Website"
              :info="websiteLabel"
              :link="website"
            />
          </div>
        </div>

        <div class="row no-gutters block-9">
          <div class="col-md-6 order-md-last d-flex">
            <contact-form />
          </div>
          <div class="col-md-6 d-flex">
            <div class="img" style="background-image: url(images/contact.svg);" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import data from '../data';
import config from '../config';
import HomeHero from '~/components/HomeHero';
import HomeAbout from '~/components/HomeAbout';
import ResumeItem from '~/components/ResumeItem';
import SkillBar from '~/components/SkillBar';
import SkillChip from '~/components/SkillChip';
import InfoCard from '~/components/InfoCard';
import PostItem from '~/components/PostItem';
import ContactItem from '~/components/ContactItem';
import ContactForm from '~/components/ContactForm';

export default {
  name: 'PageIndex',

  components: {
    HomeHero,
    HomeAbout,
    ResumeItem,
    SkillChip,
    SkillBar,
    InfoCard,
    PostItem,
    ContactItem,
    ContactForm
  },

  data() {
    return {
      ...data,
      navLinks: config.navLinks,
      showServices: false
    };
  }
};
</script>
