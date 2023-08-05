"use client";
interface Img {
  name: string;
  post?: string;
  linkedIn?: string;
  git?: string;
  medium?: string;
  top?: string;
  right?: string;
}

const ImgComponent = ({ name, linkedIn, git, medium }: Img) => {
  return (
    <section>
      <img
        src="/placeholder.png"
        alt="image"
        className="w-[400px] h-[300px] rounded-xl"
      />
      <h1 className="font-glb text-3xl mt-3">{name}</h1>
      <h3 className="flex flex-row gap-2 mb-5">
        <a href={git}>
          <svg
            enableBackground="new 0 0 32 32"
            height="32px"
            className="h-5 w-5"
            id="Layer_1"
            version="1.0"
            viewBox="0 0 32 32"
            width="32px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              clipRule="evenodd"
              d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
              fill="#181616"
              fillRule="evenodd"
            />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </a>
        <a href={linkedIn}>
          <svg
            height="100%"
            version="1.1"
            viewBox="0 0 512 512"
            width="100%"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="h-5 w-5"
          >
            <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z" />
          </svg>
        </a>
        <a href={medium}>
          <svg
            height="100%"
            version="1.1"
            viewBox="0 0 512 512"
            width="100%"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="h-5 w-5"
          >
            <g>
              <path d="M511.2,256C511.2,115.155 396.851,0.806 256.006,0.806L255.994,0.806C115.149,0.806 0.8,115.155 0.8,256C0.8,396.845 115.149,511.194 255.994,511.194L256.006,511.194C396.851,511.194 511.2,396.845 511.2,256ZM281.624,256.002C281.624,318.733 231.116,369.586 168.814,369.586C106.512,369.586 56,318.721 56,256.002C56,193.282 106.508,142.414 168.814,142.414C231.12,142.414 281.624,193.271 281.624,256.002ZM405.381,256.002C405.381,315.05 380.126,362.936 348.974,362.936C317.821,362.936 292.567,315.05 292.567,256.002C292.567,196.954 317.817,149.067 348.97,149.067C380.123,149.067 405.377,196.939 405.377,256.002L405.381,256.002ZM456,256.002C456,308.894 447.119,351.798 436.162,351.798C425.204,351.798 416.327,308.906 416.327,256.002C416.327,203.098 425.207,160.206 436.162,160.206C447.116,160.206 456,203.094 456,256.002Z" />
            </g>
          </svg>
        </a>
      </h3>
    </section>
  );
};

const MentorComp = ({ name, linkedIn, git, medium }: Img) => {
  return (
    <section className="flex flex-col justify-center items-center mb-10">
      <img
        src="/placeholderSqr.jpg"
        alt="image"
        className="rounded-full grow max-w-60 max-h-60 max-sm:w-40 max-sm:h-40"
      />
      <h1 className="font-glb text-2xl mt-3">{name}</h1>
      <h3 className="flex flex-row gap-2 mb-5">
        <a href={git}>
          <svg
            enableBackground="new 0 0 32 32"
            height="32px"
            className="h-5 w-5"
            id="Layer_1"
            version="1.0"
            viewBox="0 0 32 32"
            width="32px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              clipRule="evenodd"
              d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997  c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777  c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973  c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139  c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634  c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538  c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292  c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746  C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z"
              fill="#181616"
              fillRule="evenodd"
            />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </a>
        <a href={linkedIn}>
          <svg
            height="100%"
            version="1.1"
            viewBox="0 0 512 512"
            width="100%"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="h-5 w-5"
          >
            <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z" />
          </svg>
        </a>
        <a href={medium}>
          <svg
            height="100%"
            version="1.1"
            viewBox="0 0 512 512"
            width="100%"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="h-5 w-5"
          >
            <g>
              <path d="M511.2,256C511.2,115.155 396.851,0.806 256.006,0.806L255.994,0.806C115.149,0.806 0.8,115.155 0.8,256C0.8,396.845 115.149,511.194 255.994,511.194L256.006,511.194C396.851,511.194 511.2,396.845 511.2,256ZM281.624,256.002C281.624,318.733 231.116,369.586 168.814,369.586C106.512,369.586 56,318.721 56,256.002C56,193.282 106.508,142.414 168.814,142.414C231.12,142.414 281.624,193.271 281.624,256.002ZM405.381,256.002C405.381,315.05 380.126,362.936 348.974,362.936C317.821,362.936 292.567,315.05 292.567,256.002C292.567,196.954 317.817,149.067 348.97,149.067C380.123,149.067 405.377,196.939 405.377,256.002L405.381,256.002ZM456,256.002C456,308.894 447.119,351.798 436.162,351.798C425.204,351.798 416.327,308.906 416.327,256.002C416.327,203.098 425.207,160.206 436.162,160.206C447.116,160.206 456,203.094 456,256.002Z" />
            </g>
          </svg>
        </a>
      </h3>
    </section>
  );
};

const HoverComponent = ({ name, post }: Img) => {
  return (
    <>
      <h1 className=" relative text-center px-2 outline-2 outline-black	outline font-extrabold font-glb text-3xl z-50 bg-accent text-black">
        {name}
      </h1>
      <h1 className=" relative w-full text-center mt-2 outline-2 outline-black	outline	 font-glb text-1xl z-50 bg-accent text-black">
        {post}
      </h1>
    </>
  );
};

export default function Page() {
  return (
    <>
      <main className="flex flex-col justify-center items-center mx-4">
        <h1 className="font-glb text-8xl mt-[10vh] text-center mb-10 max-sm:text-7xl max-sm:my-10">
          MEET THE TEAM
        </h1>

        <section className="relative max-lg:hidden ">
          <img
            src="/team-w-splatter.png"
            alt="OurTeam"
            useMap="#team"
            className="-z-1"
          />
          <map name="team">
            <area
              shape="poly"
              coords="517,219,575,190,575,170,571,160,567,163,563,162,558,143,563,134,557,118,561,107,561,100,580,73,588,69,598,66,614,69,636,83,646,101,641,127,641,130,644,135,646,145,644,155,645,159,638,158,637,176,644,188,698,211,684,228,680,241,668,224,644,215,613,214,596,221,583,230,571,245,567,251,565,264,568,279,568,287,554,291,556,283,554,268,553,255,548,247,538,237,530,230,522,230,520,220"
            />
            <div className="absolute top-[-30px] right-[220px] tooltip">
              <HoverComponent name="Mukesh Kannan" post="Mentor" />

              <svg className="origin-top-left	left-[10px]  w-[90px] h-[10px] rotate-[130deg] absolute">
                <circle cx="40" cy="5" r="5" fill="#d3d3d3" />
                <line
                  x1="5"
                  y1="5"
                  x2="40"
                  y2="5"
                  stroke="#d3d3d3"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <area
              shape="poly"
              coords="679,241,700,209,727,203,729,201,721,179,720,171,718,167,720,145,722,144,732,109,730,97,746,78,783,72,817,94,820,137,814,156,818,153,810,178,800,180,798,186,809,199,767,226,734,275,736,311,731,316,722,319,722,325,726,329,725,334,689,316,689,305,685,303,691,273,680,243"
            />
            <div className="absolute top-[40px] right-[115px] tooltip">
              <HoverComponent name="Aswath" post="Vice President" />
              <svg className="origin-top-left		rotate-[150deg] absolute">
                <circle cx="60" cy="5" r="5" fill="#d3d3d3" />
                <line
                  x1="5"
                  y1="5"
                  x2="60"
                  y2="5"
                  stroke="#d3d3d3"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <area
              shape="poly"
              coords="689,568,710,496,727,474,750,459,732,422,726,378,732,355,728,330,721,322,734,315,734,279,746,253,779,215,809,201,861,205,903,226,944,263,953,286,947,344,962,351,949,416,939,421,940,451,957,470,1035,566,689,566"
            />
            <div className="absolute top-[150px] right-[0px] tooltip">
              <HoverComponent name="Srivatsav" post="Media Head" />
              <svg className="origin-top-left		rotate-[150deg] absolute">
                <circle cx="60" cy="5" r="5" fill="#d3d3d3" />
                <line
                  x1="5"
                  y1="5"
                  x2="60"
                  y2="5"
                  stroke="#d3d3d3"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <area
              shape="poly"
              coords="546,567,544,552,550,545,553,530,541,517,537,425,526,378,517,366,526,347,532,348,535,339,573,325,571,307,573,301,574,302,569,286,564,255,582,234,608,220,637,216,666,223,690,263,688,285,686,302,689,306,686,321,727,336,733,356,724,375,727,410,733,424,747,456,721,480,701,510,694,552,690,566,546,568"
            />
            <div className="absolute bottom-[10px] right-[420px] tooltip">
              <HoverComponent name="Bharath" post="Board Member" />
              <svg className="right-[0px] top-0 w-[70px] h-[10px] rotate-[-80deg] origin-top-left absolute">
                <circle cx="60" cy="5" r="5" fill="#d3d3d3" />
                <line
                  x1="5"
                  y1="5"
                  x2="60"
                  y2="5"
                  stroke="#d3d3d3"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <area
              shape="poly"
              coords="310,566,308,551,303,544,300,531,304,519,310,494,325,467,345,464,355,464,365,460,367,456,363,452,334,451,333,448,347,445,360,446,373,453,381,448,381,442,387,438,387,433,382,428,386,425,382,417,358,407,352,407,351,403,387,378,392,367,427,351,420,336,411,315,412,297,413,273,417,257,429,250,435,233,446,228,454,220,465,223,464,216,471,215,479,209,493,209,498,215,503,217,518,221,522,228,535,232,543,245,548,249,554,263,554,271,555,279,556,284,551,296,544,304,540,309,533,316,520,359,524,371,533,392,536,447,540,515,553,532,552,540,543,548,544,566,309,566"
            />
            <div className="absolute bottom-[10px] right-[550px] tooltip">
              <HoverComponent name="Rahul M Naveeth" post="President" />
              <svg className="right-[0px] top-0 w-[70px] h-[10px] rotate-[-105deg] origin-top-left absolute">
                <circle cx="60" cy="5" r="5" fill="#d3d3d3" />
                <line
                  x1="5"
                  y1="5"
                  x2="60"
                  y2="5"
                  stroke="#d3d3d3"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <area
              shape="poly"
              coords="264,273,260,254,326,189,315,174,309,161,308,157,306,145,292,115,292,93,303,72,317,64,337,60,358,65,374,73,388,96,391,115,392,151,388,160,386,161,388,169,403,176,468,185,483,209,472,211,469,215,462,215,462,221,447,222,445,226,434,229,431,242,424,241,417,240,398,214,379,205,358,195,338,197,325,203,314,208,303,222,264,272"
            />
            <div className="absolute top-[30px] left-[50px] tooltip">
              <HoverComponent name="Albert Richard" post="Board Member" />
              <svg className="right-[-60px] top-8 w-[70px] h-[10px] rotate-[30deg] origin-top-left absolute">
                <circle cx="60" cy="5" r="5" fill="#d3d3d3" />
                <line
                  x1="5"
                  y1="5"
                  x2="60"
                  y2="5"
                  stroke="#d3d3d3"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <area
              shape="poly"
              coords="244,567,224,433,225,422,289,355,284,343,286,339,277,332,269,312,261,281,273,263,267,245,269,238,283,238,281,226,285,218,297,214,309,205,317,206,359,194,383,205,397,210,414,234,429,247,413,257,411,271,416,291,420,310,425,313,427,328,433,335,434,341,430,347,394,362,388,377,351,403,363,409,381,418,386,425,380,427,389,437,383,442,376,452,349,445,334,448,334,450,358,452,364,453,366,459,326,466,312,480,306,508,307,548,309,566,244,567"
            />
            <div className="absolute bottom-[50px] left-[150px] tooltip">
              <HoverComponent name="Naveen" post="Board Member" />
              <svg className="right-[-60px] top-0 w-[70px] h-[10px] rotate-[-45deg] origin-top-left absolute">
                <circle cx="60" cy="5" r="5" fill="#d3d3d3" />
                <line
                  x1="5"
                  y1="5"
                  x2="60"
                  y2="5"
                  stroke="#d3d3d3"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <area
              shape="poly"
              coords="40,568,30,508,30,467,29,426,32,408,42,385,152,322,154,306,137,296,127,280,129,271,121,243,124,223,115,213,113,193,126,186,142,175,157,174,166,171,178,175,211,174,215,178,226,180,243,201,242,211,251,254,256,274,246,289,242,291,235,307,235,323,279,333,285,336,289,356,224,421,242,565,42,565"
            />
            <div className="absolute bottom-[370px] left-[-100px] tooltip">
              <HoverComponent name="Ravi Prasath" post="Mentor" />
              <svg className="right-[-60px] top-8 w-[70px] h-[10px] rotate-[30deg] origin-top-left absolute">
                <circle cx="60" cy="5" r="5" fill="#d3d3d3" />
                <line
                  x1="5"
                  y1="5"
                  x2="60"
                  y2="5"
                  stroke="#d3d3d3"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <area
              shape="poly"
              coords="471,185,519,128,519,116,505,100,499,91,498,80,500,78,503,76,500,51,501,37,516,23,531,19,546,21,562,29,567,34,570,63,573,66,576,76,562,97,559,113,564,134,559,139,562,161,567,163,572,159,577,172,576,190,520,216,486,211,471,186"
            />
            <div className="absolute top-[-30px] left-[360px] tooltip">
              <HoverComponent name="Sri Ram" post="Administrator" />
              <svg className="right-[-60px] top-8 w-[70px] h-[10px] rotate-[30deg] origin-top-left absolute">
                <circle cx="60" cy="5" r="5" fill="#d3d3d3" />
                <line
                  x1="5"
                  y1="5"
                  x2="60"
                  y2="5"
                  stroke="#d3d3d3"
                  strokeLinecap="round"
                  strokeWidth="4"
                />
              </svg>
            </div>
          </map>
        </section>

        <section className="flex flex-col justify-center mt-10 items-center">
          <h1 className="font-glb text-5xl max-sm:text-4xl mb-5 ">PRESIDENT</h1>
          <ImgComponent
            name="Rahul M Navneeth"
            git="www.github.com"
            linkedIn="www.linkedin.com"
            medium="www.google.com"
          />
        </section>

        <section className="flex flex-col justify-center items-center py-14 max-sm:mt-5 w-full ">
          <h1 className="font-glb text-5xl max-sm:text-4xl mb-5 mt-3">
            BOARD MEMBERS
          </h1>
          <section className="flex flex-row gap-4 flex-wrap justify-around">
            <ImgComponent
              name="Bharath"
              git="www.github.com"
              linkedIn="www.linkedin.com"
              medium="www.google.com"
            />
            <ImgComponent
              name="Naveen"
              git="www.github.com"
              linkedIn="www.linkedin.com"
              medium="www.google.com"
            />
            <ImgComponent
              name="Ashwath"
              git="www.github.com"
              linkedIn="www.linkedin.com"
              medium="www.google.com"
            />
            <ImgComponent
              name="Albert Richard"
              git="www.github.com"
              linkedIn="www.linkedin.com"
              medium="www.google.com"
            />
          </section>
        </section>

        <section className="flex flex-col justify-center items-center py-14 max-sm:mt-5 w-full ">
          <h1 className="font-glb text-5xl text-center max-sm:text-4xl mb-5 mt-3">
            MEDIA AND ADMINISTRATION
          </h1>
          <section className="flex flex-row gap-4 flex-wrap justify-around">
            <ImgComponent
              name="Srivatsav"
              git="www.github.com"
              linkedIn="www.linkedin.com"
              medium="www.google.com"
            />
            <ImgComponent
              name="Sriram"
              git="www.github.com"
              linkedIn="www.linkedin.com"
              medium="www.google.com"
            />
          </section>
        </section>

        <section className="flex flex-col justify-center items-center max-sm:mt-5  md:px-24  2xl:px-60 ">
          <h1 className="font-glb text-5xl max-sm:text-4xl mb-5 mt-3">
            MEMBERS
          </h1>
          <section className="flex flex-row gap-4 flex-wrap justify-around">
            <MentorComp name="Mukesh Kannan MK" git="www.google.com" />
            <MentorComp name="Ravi Prasath" git="www.google.com" />
            <MentorComp name="Elon" git="www.google.com" />
            <MentorComp name="Mark" git="www.google.com" />
            <MentorComp name="Bill" git="www.google.com" />
            <MentorComp name="Tim" git="www.google.com" />
            <MentorComp name="Jeff" git="www.google.com" />
          </section>
        </section>
      </main>

      <style jsx>{`
        .tooltip {
          position: absolute;
          pointer-events: none;
          display: none;
        }
        area:hover + .tooltip {
          display: block;
        }
      `}</style>
    </>
  );
}
