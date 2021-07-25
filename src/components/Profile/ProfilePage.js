import React from 'react';

import S1BGHero from './s1BgHero';

import S3Body from './s3Body';
import Fade from "react-reveal"

import LastNightVibes from "../../images/last-night-vibes.jpeg"

import S4Body from './s4Body';

import S2SocialBio from './s2SocialBio';

function Profile() {
  return (
    <>
      {/*<Navbar transparent />*/}
      <main className="profile-page bgBottom">
        <S1BGHero />
        <section className="static py-16 bg-black ">
          <div className="container px-4 mx-auto">
            <div className="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl animate-fade-in-fwd">
              <div className="px-4 md:px-6">
                <S2SocialBio />
                <S3Body />
              </div>

              {/* Section 1 */} ``
              <section className="flex flex-col w-full bg-black md:flex-row">
                <div className="flex flex-col items-center justify-center w-full px-6 py-10 md:w-1/2 lg:p-16 xl:p-24">
                  <Fade bottom>
                  <h2 className="max-w-lg text-4xl font-light leading-tight text-white md:text-3xl lg:text-4xl xl:text-5xl font-ubuntu">
                    Funk With El Monk
                  </h2>
                  <p className="max-w-lg mt-5 text-xl text-left text-gray-500 md:text-base lg:text-xl font-ubuntu">
                    just doin my spiritual thang
                  </p>
                  </Fade>
                </div>
                <div className="w-full md:w-1/2">
                <Fade bottom>
                  <img
                    src={LastNightVibes}
                    className="inset-0 object-cover"
                  />
                  </Fade>
                </div>
              </section>
``
              <div className="px-4 md:px-6">
                <S4Body />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
