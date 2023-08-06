import SectionTitle from '@/components/UI/SectionTitle';
import TeamCard from '@/components/cards/TeamCard';

import { TEAM } from '@/constants/team';

export default function Team() {
  return (
    <section className='mx-container mb-section mt-14 lg:mt-20'>
      <h1 className='text-white text-center font-bold mb-14 text-3xl 3xs:text-6xl sm:text-8xl lg:text-10xl 2xl:text-12xl'>
        Team
      </h1>
      <div className='grid gap-32'>
        {TEAM.map((subteam) => (
          <div key={subteam.id}>
            <SectionTitle mb='mb-12'>{subteam.name}</SectionTitle>
            <div className='flex gap-8 3xs:gap-12 xl:gap-20 flex-wrap justify-center'>
              {subteam.members.map((member) => (
                <TeamCard {...member} key={member.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
