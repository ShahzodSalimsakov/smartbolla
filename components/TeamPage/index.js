import Image from "next/image";

function Team() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      {
        teamData.map(team => (
          <div className="md:p-8 p-2">
            <Image
                className="rounded-lg w-full"
                src={team.photoLink}
                width={500}
                height={500}
            />
            <h1 className="font-semibold leading-none text-xl mt-1 capitalize truncate text-white">
              {team.name}
            </h1>
            <div className="max-w-full">
              <p className="text-base font-medium tracking-wide mt-1 text-white">
                {team.description}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

const teamData = [
  {
    name: 'Shahzod',
    description: 'Developer',
    photoLink: 'https://smartbolla.com/upload/resize_cache/iblock/10a/800_800_1/10a462f49021c9cf8f96b8dff85ff53b.jpg'
  },
  {
    name: 'Davron',
    description: 'Developer',
    photoLink: 'https://smartbolla.com/upload/resize_cache/iblock/10a/800_800_1/10a462f49021c9cf8f96b8dff85ff53b.jpg'
  },
  {
    name: 'Bekzod',
    description: 'Developer',
    photoLink: 'https://smartbolla.com/upload/resize_cache/iblock/10a/800_800_1/10a462f49021c9cf8f96b8dff85ff53b.jpg'
  },
  {
    name: 'Nuriddin',
    description: 'Developer',
    photoLink: 'https://smartbolla.com/upload/resize_cache/iblock/10a/800_800_1/10a462f49021c9cf8f96b8dff85ff53b.jpg'
  },
  {
    name: 'Abdurahmon',
    description: 'Developer',
    photoLink: 'https://smartbolla.com/upload/resize_cache/iblock/10a/800_800_1/10a462f49021c9cf8f96b8dff85ff53b.jpg'
  },
  {
    name: 'Doniyor',
    description: 'Developer',
    photoLink: 'https://smartbolla.com/upload/resize_cache/iblock/10a/800_800_1/10a462f49021c9cf8f96b8dff85ff53b.jpg'
  }
]

export default Team