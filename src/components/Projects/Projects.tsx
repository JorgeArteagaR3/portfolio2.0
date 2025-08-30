import { Project } from '../Project/Project';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './Projects.css';
import { Section } from '../UI/Section';
import { PROJECTS } from '@/constants';

const Projects = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<div class="' + className + '">' + (index + 1) + '</div>';
    },
  };

  return (
    <Section id="projects" key="projects">
      <h2 className="pl-10 md:pl-16 lg:pl-24 text-4xl font-['Museoslab'] text-left md:text-5xl 2xl:text-6xl mb-12">
        My Projects
      </h2>
      <div className="z-0 lg:max-w-[95%] mx-auto bg-lightpurple rounded-[56px] xl:flex relative lg:h-[550px] xl:h-[620px] 2xl:h-[720px] ">
        <Swiper
          spaceBetween={200}
          loop
          speed={1200}
          scrollbar={{ draggable: true }}
          pagination={pagination}
          modules={[Pagination]}
          slidesPerView={1}
          className="h-full w-full"
        >
          {PROJECTS.map(
            ({ mainImage, technologies, title, website, description }) => (
              <SwiperSlide
                key={website}
                className="h-full relative flex flex-col justify-center items-center gap-6 md:grid md:grid-cols-2 md:place-items-center px-10 md:pb-10 pt-10"
              >
                <Project
                  mainImage={mainImage}
                  description={description}
                  technologies={technologies}
                  title={title}
                  website={website}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </Section>
  );
};
export default Projects;
