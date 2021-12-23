const classTypes = [
	{
		"id": "fa0375530a8143cd8c92c0c02670611a",
		"name": "Theme (Bike Bootcamp)",
		"display_name": "Theme",
		"fitness_discipline": "bike_bootcamp",
		"is_active": false,
		"list_order": 1
	},
	{
		"id": "194a694693964d4d89a17c49aea9127e",
		"name": "Body Focus (Bike Bootcamp)",
		"display_name": "Body Focus",
		"fitness_discipline": "bike_bootcamp",
		"is_active": true,
		"list_order": 2
	},
	{
		"id": "55e65502207e4369bfcf1c7f3ad082e8",
		"name": "Music (Bike Bootcamp)",
		"display_name": "Music",
		"fitness_discipline": "bike_bootcamp",
		"is_active": true,
		"list_order": 3
	},
	{
		"id": "826b636b09ba46a5945096ef9bb5ab53",
		"name": "Bodyweight (Bike Bootcamp",
		"display_name": "Bodyweight",
		"fitness_discipline": "bike_bootcamp",
		"is_active": true,
		"list_order": 4
	},
	{
		"id": "42ff0fb62865408bbc07ec09c1176a76",
		"name": "HIIT Cardio Warm Up",
		"display_name": "Warm Up",
		"fitness_discipline": "cardio",
		"is_active": true,
		"list_order": 5
	},
	{
		"id": "07e0a4ce14b745e9a7be6948cece8334",
		"name": "HIIT Cardio",
		"display_name": "HIIT",
		"fitness_discipline": "cardio",
		"is_active": true,
		"list_order": 6
	},
	{
		"id": "34bf618aa3c64be4af4585b7b1658df1",
		"name": "Music (HIIT Cardio)",
		"display_name": "Music HIIT",
		"fitness_discipline": "cardio",
		"is_active": true,
		"list_order": 7
	},
	{
		"id": "a5953fd181914f4eb69e755e1fefffce",
		"name": "Family Cardio",
		"display_name": "Family",
		"fitness_discipline": "cardio",
		"is_active": true,
		"list_order": 8
	},
	{
		"id": "1fef162e27b4413facff77cc7f766ced",
		"name": "Dance Cardio",
		"display_name": "Dance Cardio",
		"fitness_discipline": "cardio",
		"is_active": true,
		"list_order": 9
	},
	{
		"id": "fe97840b3e5647aca9bede207e3b854e",
		"name": "Warm Up Bootcamp",
		"display_name": "Warm Up",
		"fitness_discipline": "circuit",
		"is_active": true,
		"list_order": 10
	},
	{
		"id": "3c65fba3c4a64e2db9a12776e09bc883",
		"name": "Body Focus (Bootcamp)",
		"display_name": "Body Focus",
		"fitness_discipline": "circuit",
		"is_active": true,
		"list_order": 11
	},
	{
		"id": "b0a7fc01affb4249aca872a046c6a344",
		"name": "Bodyweight (Bootcamp)",
		"display_name": "Bodyweight",
		"fitness_discipline": "circuit",
		"is_active": true,
		"list_order": 12
	},
	{
		"id": "6590f6042e8e4d1d8c2f3f1a73cf1729",
		"name": "Music (Bootcamp)",
		"display_name": "Music",
		"fitness_discipline": "circuit",
		"is_active": true,
		"list_order": 13
	},
	{
		"id": "b474dfb4a0774003a4bcca03ba6d2218",
		"name": "Theme (Bootcamp)",
		"display_name": "Theme",
		"fitness_discipline": "circuit",
		"is_active": true,
		"list_order": 14
	},
	{
		"id": "209458d0f8c84614aa96537f7fff403f",
		"name": "Low Impact Bootcamp",
		"display_name": "Low Impact",
		"fitness_discipline": "circuit",
		"is_active": true,
		"list_order": 15
	},
	{
		"id": "b70f0feabd7043cfa1c5f7e9f73b43d5",
		"name": "Heart Rate Bootcamp",
		"display_name": "Heart Rate Zone",
		"fitness_discipline": "circuit",
		"is_active": true,
		"list_order": 16
	},
	{
		"id": "919794060b734915b13ddee4e7e39084",
		"name": "Running Skills",
		"display_name": "Running Skills",
		"fitness_discipline": "running",
		"is_active": true,
		"list_order": 17
	},
	{
		"id": "c0681493aaeb4029b01f64a6c9ff3e0e",
		"name": "Warm Up/Cool Down Running",
		"display_name": "Warm Up/Cool Down",
		"fitness_discipline": "running",
		"is_active": true,
		"list_order": 18
	},
	{
		"id": "feda7eed0d8247f2868314eaa74f37fd",
		"name": "Theme Run",
		"display_name": "Theme",
		"fitness_discipline": "running",
		"is_active": true,
		"list_order": 19
	},
	{
		"id": "a9456fd677744f2ab9504d4accae96fd",
		"name": "Music (Running)",
		"display_name": "Music",
		"fitness_discipline": "running",
		"is_active": true,
		"list_order": 20
	},
	{
		"id": "19efefbcf7394ff8bac0ac89a674c545",
		"name": "Endurance",
		"display_name": "Endurance",
		"fitness_discipline": "running",
		"is_active": true,
		"list_order": 21
	},
	{
		"id": "a81cd52ccc3140edb1fbf28dbf880791",
		"name": "Speed Running",
		"display_name": "Speed",
		"fitness_discipline": "running",
		"is_active": true,
		"list_order": 22
	},
	{
		"id": "e2a1f782a89e45abacd962f5aa105990",
		"name": "Intervals Running",
		"display_name": "Intervals",
		"fitness_discipline": "running",
		"is_active": true,
		"list_order": 23
	},
	{
		"id": "85724534f42b490ca1c4fdd4c4d35cf1",
		"name": "Heart Rate Running",
		"display_name": "Heart Rate Zone",
		"fitness_discipline": "running",
		"is_active": true,
		"list_order": 24
	},
	{
		"id": "5ce29a5ff8524bba9132cff42e5cbedd",
		"name": "Warm Up/Cool Down Walking",
		"display_name": "Warm Up/Cool Down",
		"fitness_discipline": "walking",
		"is_active": true,
		"list_order": 25
	},
	{
		"id": "d84d91191eb54d4aa265f82fe3375b92",
		"name": "Music Walk",
		"display_name": "Music",
		"fitness_discipline": "walking",
		"is_active": true,
		"list_order": 26
	},
	{
		"id": "da49e151806f426090da2004997d3238",
		"name": "Power Walking",
		"display_name": "Power Walk",
		"fitness_discipline": "walking",
		"is_active": true,
		"list_order": 27
	},
	{
		"id": "ca0daca029914c8ba83de0e1543001b3",
		"name": "Hiking Walking",
		"display_name": "Hiking",
		"fitness_discipline": "walking",
		"is_active": true,
		"list_order": 28
	},
	{
		"id": "e65de89202dc4d2f853ded0f4daa7c15",
		"name": "Walk + Run",
		"display_name": "Walk + Run",
		"fitness_discipline": "walking",
		"is_active": true,
		"list_order": 29
	},
	{
		"id": "88a2c821efd2439a85e03bb45ddb06eb",
		"name": "Strength Warm Up",
		"display_name": "Warm Up",
		"fitness_discipline": "strength",
		"is_active": true,
		"list_order": 30
	},
	{
		"id": "50026a12cfcb4be09d2ec1cdda6dbeeb",
		"name": "Strength Skills",
		"display_name": "Strength Skills",
		"fitness_discipline": "strength",
		"is_active": true,
		"list_order": 31
	},
	{
		"id": "b6d28ceb6d1448b4b9cc6f0bb97dd78f",
		"name": "Bodyweight (Strength & toning)",
		"display_name": "Bodyweight",
		"fitness_discipline": "strength",
		"is_active": true,
		"list_order": 32
	},
	{
		"id": "b9022fc339ba4e6b95f19cb395bd6b71",
		"name": "Full Body (Strength & Toning)",
		"display_name": "Full Body",
		"fitness_discipline": "strength",
		"is_active": true,
		"list_order": 33
	},
	{
		"id": "d2f2f12b633140079d03291738cec418",
		"name": "Upper Body (strength & toning)",
		"display_name": "Upper Body",
		"fitness_discipline": "strength",
		"is_active": true,
		"list_order": 34
	},
	{
		"id": "3e8ce451d5a64913aed7c5ae2d151030",
		"name": "Core (Strength & Toning)",
		"display_name": "Core",
		"fitness_discipline": "strength",
		"is_active": true,
		"list_order": 35
	},
	{
		"id": "af137d7195a34e7f96f4d306da554ebd",
		"name": "Lower Body (Strength & Toning)",
		"display_name": "Lower Body",
		"fitness_discipline": "strength",
		"is_active": true,
		"list_order": 36
	},
	{
		"id": "c3ad1c11add648d89789eb061d8fabd4",
		"name": "Arms & Light Weights",
		"display_name": "Arms & Light Weights",
		"fitness_discipline": "strength",
		"is_active": true,
		"list_order": 37
	},
	{
		"id": "77a47c85e6a345df9dbd639b347916c5",
		"name": "Strength for Runners",
		"display_name": "Strength for Runners",
		"fitness_discipline": "strength",
		"is_active": true,
		"list_order": 38
	},
	{
		"id": "6fe9faa5af4f4272a00c9f2c9d797d6b",
		"name": "Resistance Bands",
		"display_name": "Resistance Bands",
		"fitness_discipline": "strength",
		"is_active": true,
		"list_order": 39
	},
	{
		"id": "717e71932a42437f8d837264613fb626",
		"name": "Barre",
		"display_name": "Barre",
		"fitness_discipline": "strength",
		"is_active": true,
		"list_order": 40
	},
	{
		"id": "2374fff64b9f4a4aa381bef9c2f4382c",
		"name": "Pilates",
		"display_name": "Pilates",
		"fitness_discipline": "strength",
		"is_active": true,
		"list_order": 41
	},
	{
		"id": "c394f87aaca547dcade60f754b0341c7",
		"name": "Prenatal",
		"display_name": "Prenatal",
		"fitness_discipline": "strength",
		"is_active": true,
		"list_order": 42
	},
	{
		"id": "127c41262894455686bf11267239ba79",
		"name": "Full Body Stretch",
		"display_name": "Full Body Stretch",
		"fitness_discipline": "stretching",
		"is_active": true,
		"list_order": 43
	},
	{
		"id": "34b647095d614f9b8c37b85100db58ce",
		"name": "Upper Body Stretch",
		"display_name": "Upper Body Stretch",
		"fitness_discipline": "stretching",
		"is_active": true,
		"list_order": 44
	},
	{
		"id": "625597385b1040eeb18f8143cc4e5010",
		"name": "Lower Body Stretch",
		"display_name": "Lower Body Stretch",
		"fitness_discipline": "stretching",
		"is_active": true,
		"list_order": 45
	},
	{
		"id": "736e33ce009b425e81f276cfaf42b5d3",
		"name": "Pre & Post-Ride Stretch",
		"display_name": "Pre & Post-Ride Stretch",
		"fitness_discipline": "stretching",
		"is_active": true,
		"list_order": 46
	},
	{
		"id": "b6885c9659f04a308164d9809bf58acb",
		"name": "Pre & Post-Run Stretch",
		"display_name": "Pre & Post-Run Stretch",
		"fitness_discipline": "stretching",
		"is_active": true,
		"list_order": 47
	},
	{
		"id": "ca63751ab3f1430fb31d1d06e5d34804",
		"name": "OUTDOOR Warm Up Cool Down",
		"display_name": "Warm Up/Cool Down",
		"fitness_discipline": "running",
		"is_active": true,
		"list_order": 48
	},
	{
		"id": "9dc3be9eaafb476d8853f90cd33e6e04",
		"name": "OUTDOOR Walking",
		"display_name": "Walking",
		"fitness_discipline": "walking",
		"is_active": true,
		"list_order": 49
	},
	{
		"id": "69c8c93acf3e46b290694e69ca8db450",
		"name": "OUTDOOR Music Run",
		"display_name": "Music",
		"fitness_discipline": "running",
		"is_active": true,
		"list_order": 50
	},
	{
		"id": "3a1057ab8fed477884aaecb01e2ee525",
		"name": "OUTDOOR Theme",
		"display_name": "Theme",
		"fitness_discipline": "running",
		"is_active": true,
		"list_order": 51
	},
	{
		"id": "23732a102a5f425db1ddaff21e35405e",
		"name": "OUTDOOR Endurance Running",
		"display_name": "Endurance",
		"fitness_discipline": "running",
		"is_active": true,
		"list_order": 52
	},
	{
		"id": "db1f7d7342c844a79f2621ab3d4bc183",
		"name": "OUTDOOR Speed Training",
		"display_name": "Speed",
		"fitness_discipline": "running",
		"is_active": true,
		"list_order": 53
	},
	{
		"id": "ee0b994867b946728e880e96297a180e",
		"name": "OUTDOOR Intervals Running",
		"display_name": "Intervals",
		"fitness_discipline": "running",
		"is_active": true,
		"list_order": 54
	},
	{
		"id": "4b09fff90e954436b189f1e593c5db51",
		"name": "Mindfulness",
		"display_name": "Mindfulness",
		"fitness_discipline": "meditation",
		"is_active": true,
		"list_order": 55
	},
	{
		"id": "1fe59d5407c243f987d9050862213835",
		"name": "Relax & Sleep",
		"display_name": "Relax & Sleep",
		"fitness_discipline": "meditation",
		"is_active": true,
		"list_order": 56
	},
	{
		"id": "33b4257b1b774511945183dbf7cb2db0",
		"name": "Fitness Focus",
		"display_name": "Fitness Focus",
		"fitness_discipline": "meditation",
		"is_active": true,
		"list_order": 57
	},
	{
		"id": "f4cf26e6059943a0a8e3a6533bb76239",
		"name": "Emotions",
		"display_name": "Emotions",
		"fitness_discipline": "meditation",
		"is_active": true,
		"list_order": 58
	},
	{
		"id": "24fcd278f49d4f8692879b3dbfa52081",
		"name": "Meditation Basics",
		"display_name": "Meditation Basics",
		"fitness_discipline": "meditation",
		"is_active": true,
		"list_order": 59
	},
	{
		"id": "d690ffee9e6743a2b3ef5ffc1b490d54",
		"name": "Meditation Anywhere",
		"display_name": "Meditation Anywhere",
		"fitness_discipline": "meditation",
		"is_active": true,
		"list_order": 60
	},
	{
		"id": "ee52cd1988ca496ab7b130de8ab3d9b2",
		"name": "Zen in Ten",
		"display_name": "Zen in Ten",
		"fitness_discipline": "meditation",
		"is_active": true,
		"list_order": 61
	},
	{
		"id": "81a244421f1c4e9da1b40caca2d9bd61",
		"name": "Audio Only (Meditation)",
		"display_name": "Audio Only",
		"fitness_discipline": "meditation",
		"is_active": true,
		"list_order": 62
	},
	{
		"id": "9f9be657134e4d868d76ae4988da01f1",
		"name": "Beginner",
		"display_name": "Beginner",
		"fitness_discipline": "cycling",
		"is_active": true,
		"list_order": 63
	},
	{
		"id": "59a49f882ea9475faa3110d50a8fb3f3",
		"name": "Low Impact",
		"display_name": "Low Impact",
		"fitness_discipline": "cycling",
		"is_active": true,
		"list_order": 64
	},
	{
		"id": "665395ff3abf4081bf315686227d1a51",
		"name": "Power Zone",
		"display_name": "Power Zone",
		"fitness_discipline": "cycling",
		"is_active": true,
		"list_order": 65
	},
	{
		"id": "bf6639f2e50a4f0395cb1479542ed4bd",
		"name": "Climb",
		"display_name": "Climb",
		"fitness_discipline": "cycling",
		"is_active": true,
		"list_order": 66
	},
	{
		"id": "a2ee6b0a98e2431baf60e5261b8605e2",
		"name": "Live DJ",
		"display_name": "Live DJ",
		"fitness_discipline": "cycling",
		"is_active": true,
		"list_order": 67
	},
	{
		"id": "7579b9edbdf9464fa19eb58193897a73",
		"name": "Intervals",
		"display_name": "Intervals",
		"fitness_discipline": "cycling",
		"is_active": true,
		"list_order": 68
	},
	{
		"id": "8c34b36dba084e22b91426621759230d",
		"name": "Heart Rate Zone",
		"display_name": "Heart Rate Zone",
		"fitness_discipline": "cycling",
		"is_active": true,
		"list_order": 69
	},
	{
		"id": "f10471dcd6a34e5f8ed54eb634b5df19",
		"name": "Theme",
		"display_name": "Theme",
		"fitness_discipline": "cycling",
		"is_active": true,
		"list_order": 70
	},
	{
		"id": "c87e20095d80463db5ce04df7fe2b989",
		"name": "Music (Cycling)",
		"display_name": "Music",
		"fitness_discipline": "cycling",
		"is_active": true,
		"list_order": 71
	},
	{
		"id": "9745b8e2cb274a28b096387073a5d993",
		"name": "Groove",
		"display_name": "Groove",
		"fitness_discipline": "cycling",
		"is_active": true,
		"list_order": 72
	},
	{
		"id": "1b31748d30fa4e38b2782698bb831320",
		"name": "Metrics",
		"display_name": "Metrics",
		"fitness_discipline": "cycling",
		"is_active": true,
		"list_order": 73
	},
	{
		"id": "4228e9e57bf64c518d58a1d0181760c4",
		"name": "Pro Cyclist",
		"display_name": "Pro Cyclist",
		"fitness_discipline": "cycling",
		"is_active": true,
		"list_order": 74
	},
	{
		"id": "2a33cde6c4e9440b8321b05f700e0736",
		"name": "Bike Bootcamp",
		"display_name": "Bike Bootcamp",
		"fitness_discipline": "cycling",
		"is_active": false,
		"list_order": 75
	},
	{
		"id": "56c834e143d4423799fc1d3f3fd70ec8",
		"name": "Yoga Flow",
		"display_name": "Flow",
		"fitness_discipline": "yoga",
		"is_active": true,
		"list_order": 76
	},
	{
		"id": "b6faaa4a53eb40d9a536041ae89b45bb",
		"name": "Focus Flow",
		"display_name": "Focus Flow",
		"fitness_discipline": "yoga",
		"is_active": true,
		"list_order": 77
	},
	{
		"id": "d18e9d2421e04709b04842a30dc875e1",
		"name": "Music (Yoga)",
		"display_name": "Music",
		"fitness_discipline": "yoga",
		"is_active": true,
		"list_order": 78
	},
	{
		"id": "9fa2eb4699a74a169b46cdbbf08d1c34",
		"name": "Theme (Yoga)",
		"display_name": "Theme",
		"fitness_discipline": "yoga",
		"is_active": true,
		"list_order": 79
	},
	{
		"id": "28172f66e4824a8fbd8b756e6c265ff4",
		"name": "Power Yoga",
		"display_name": "Power",
		"fitness_discipline": "yoga",
		"is_active": true,
		"list_order": 80
	},
	{
		"id": "358dcbeacd0e4d7db2f563a90677aae0",
		"name": "Slow Flow",
		"display_name": "Slow Flow",
		"fitness_discipline": "yoga",
		"is_active": true,
		"list_order": 81
	},
	{
		"id": "8fe8155b47a64da0a50a0c314fcd393c",
		"name": "Restorative Yoga",
		"display_name": "Restorative",
		"fitness_discipline": "yoga",
		"is_active": true,
		"list_order": 82
	},
	{
		"id": "190494e7f04f49bc8d10412b081699e3",
		"name": "Family & Pre/Postnatal",
		"display_name": "Family & Pre/Postnatal",
		"fitness_discipline": "yoga",
		"is_active": true,
		"list_order": 83
	},
	{
		"id": "9da7b05642d44ec19050fa8bc547ecc9",
		"name": "Yoga Anywhere",
		"display_name": "Yoga Anywhere",
		"fitness_discipline": "yoga",
		"is_active": true,
		"list_order": 84
	},
	{
		"id": "6b0547c130c54f88b1c85b421d53bffa",
		"name": "Yoga Basics",
		"display_name": "Yoga Basics",
		"fitness_discipline": "yoga",
		"is_active": true,
		"list_order": 85
	},
	{
		"id": "6543717c3ab74feb8711f224281cdf99",
		"name": "Cardio",
		"display_name": "Cardio",
		"fitness_discipline": "cardio",
		"is_active": false,
		"list_order": 86
	},
	{
		"id": "885fa45fc91240cca5ca96d8d0d25bff",
		"name": "Full Body (BTR Cardio)",
		"display_name": "Full Body",
		"fitness_discipline": "cardio",
		"is_active": false,
		"list_order": 87
	},
	{
		"id": "c17def9c7b004f238a3369476b0866af",
		"name": "Low Intensity Floor",
		"display_name": "Low Intensity",
		"fitness_discipline": "cardio",
		"is_active": false,
		"list_order": 88
	},
	{
		"id": "7761a495d2cb4775b8bb784851d10861",
		"name": "Shadowboxing (BTR Cardio)",
		"display_name": "Shadowboxing ",
		"fitness_discipline": "cardio",
		"is_active": false,
		"list_order": 89
	},
	{
		"id": "2476cca19b304584942b4897a33ce838",
		"name": "Bootcamp Basics",
		"display_name": "Bootcamp Basics",
		"fitness_discipline": "circuit",
		"is_active": false,
		"list_order": 90
	},
	{
		"id": "cd4f646b69ab40d0837f9420a7780149",
		"name": "Beginner Circuit",
		"display_name": "Beginner",
		"fitness_discipline": "circuit",
		"is_active": false,
		"list_order": 91
	},
	{
		"id": "399c3aab3d6e45e48488703a8f7b5904",
		"name": "Low Intensity Circuit",
		"display_name": "Low Intensity",
		"fitness_discipline": "circuit",
		"is_active": false,
		"list_order": 92
	},
	{
		"id": "e47d184cc3e047d6a318a52e0f25a36d",
		"name": "OUTDOOR Run + Strength",
		"display_name": "Run + Strength",
		"fitness_discipline": "circuit",
		"is_active": false,
		"list_order": 93
	},
	{
		"id": "0b45ef267561426fbcebedae7a7432b1",
		"name": "OUTDOOR Run + Bodyweight",
		"display_name": "Run + Bodyweight",
		"fitness_discipline": "circuit",
		"is_active": false,
		"list_order": 94
	},
	{
		"id": "a4606e24e17142b794ccfeafe1c56e9c",
		"name": "Run + Strength",
		"display_name": "Run + Strength",
		"fitness_discipline": "circuit",
		"is_active": false,
		"list_order": 95
	},
	{
		"id": "1a87ed4c06a74566ba7a1e4e3d68378b",
		"name": "Just Ride",
		"display_name": "Just Ride",
		"fitness_discipline": "cycling",
		"is_active": false,
		"list_order": 96
	},
	{
		"id": "3e8b662199414382be3f4bed70634f6f",
		"name": "Scenic (Cycling)",
		"display_name": "Scenic",
		"fitness_discipline": "cycling",
		"is_active": false,
		"list_order": 97
	},
	{
		"id": "9ea1256cf69b4bbe9c7b839ac704bde1",
		"name": "Guided Visualization",
		"display_name": "Guided Visualization",
		"fitness_discipline": "meditation",
		"is_active": false,
		"list_order": 98
	},
	{
		"id": "f7e3235ac4894dcb8694d2559ea43674",
		"name": "Beginner Running",
		"display_name": "Beginner",
		"fitness_discipline": "running",
		"is_active": false,
		"list_order": 99
	},
	{
		"id": "a4a28ea4bb2340bc9620a1fa3e0406d2",
		"name": "Climb Running",
		"display_name": "Climb",
		"fitness_discipline": "running",
		"is_active": false,
		"list_order": 100
	},
	{
		"id": "262ab03b69ef40eebae697463c4971eb",
		"name": "Distance Running",
		"display_name": "Distance",
		"fitness_discipline": "running",
		"is_active": false,
		"list_order": 101
	},
	{
		"id": "be93f3591e444631bd0e42b6d7e7fadc",
		"name": "Hill Running",
		"display_name": "Hills",
		"fitness_discipline": "running",
		"is_active": false,
		"list_order": 102
	},
	{
		"id": "a8b4a232401f44d893554787d25d8e1f",
		"name": "Just Run",
		"display_name": "Just Run",
		"fitness_discipline": "running",
		"is_active": false,
		"list_order": 103
	},
	{
		"id": "9474b7e53df2461b92eca7b772ed9f0e",
		"name": "Metrics Running",
		"display_name": "Metrics",
		"fitness_discipline": "running",
		"is_active": false,
		"list_order": 104
	},
	{
		"id": "e40e2354fecf44258666a85973871525",
		"name": "not a class type",
		"display_name": "not a class type",
		"fitness_discipline": "running",
		"is_active": false,
		"list_order": 105
	},
	{
		"id": "248e8f11ec8b490fb1b7ee540970e861",
		"name": "Pre & Post Run",
		"display_name": "Pre & Post Run",
		"fitness_discipline": "running",
		"is_active": false,
		"list_order": 106
	},
	{
		"id": "f2c29be3cfc14d519c0bb9121ff69105",
		"name": "Race Prep Running",
		"display_name": "Race Prep",
		"fitness_discipline": "running",
		"is_active": false,
		"list_order": 107
	},
	{
		"id": "961ee031e4774014801aea209936356f",
		"name": "Running Basics",
		"display_name": "Running Basics",
		"fitness_discipline": "running",
		"is_active": false,
		"list_order": 108
	},
	{
		"id": "5fbe0d8811c543729700fe50019b5190",
		"name": "Scenic (Running)",
		"display_name": "Scenic",
		"fitness_discipline": "running",
		"is_active": false,
		"list_order": 109
	},
	{
		"id": "f45e6dd7d4ab46be86a23b3f6de0eef0",
		"name": "Arms & Shoulders (strength & toning) BTR",
		"display_name": "Arms & Shoulders (strength & toning) BTR",
		"fitness_discipline": "strength",
		"is_active": false,
		"list_order": 110
	},
	{
		"id": "237bbfbb27aa4f5c99cfa9e04299e8ab",
		"name": "Beginner (strength & toning)",
		"display_name": "Beginner",
		"fitness_discipline": "strength",
		"is_active": false,
		"list_order": 111
	},
	{
		"id": "d263bc82874e44b9b7b1c450e5c03162",
		"name": "Chest & Back (Strength & Toning)",
		"display_name": "Chest & Back",
		"fitness_discipline": "strength",
		"is_active": false,
		"list_order": 112
	},
	{
		"id": "4eb81961bb0843798ed254770797f679",
		"name": "Strength",
		"display_name": "Strength",
		"fitness_discipline": "strength",
		"is_active": false,
		"list_order": 113
	},
	{
		"id": "768147e821d249038c00ae3035b2b35f",
		"name": "Toning (Strength & Toning)",
		"display_name": "Toning",
		"fitness_discipline": "strength",
		"is_active": false,
		"list_order": 114
	},
	{
		"id": "a46f4789f9cd431b807fe19dcd8fe7de",
		"name": "Toning",
		"display_name": "Toning",
		"fitness_discipline": "strength",
		"is_active": false,
		"list_order": 115
	},
	{
		"id": "11bfd07a36aa48b49a94f928287e03c0",
		"name": "Chest & Back Stretch",
		"display_name": "Chest & Back Stretch",
		"fitness_discipline": "stretching",
		"is_active": false,
		"list_order": 116
	},
	{
		"id": "47dd4476990246dd9da127f30f8f9eae",
		"name": "Post-Ride Stretch",
		"display_name": "Post-Ride Stretch",
		"fitness_discipline": "stretching",
		"is_active": false,
		"list_order": 117
	},
	{
		"id": "8fc1cbb71ba34b9485ab5d90c7bfc52b",
		"name": "Specialized Stretch",
		"display_name": "Specialized",
		"fitness_discipline": "stretching",
		"is_active": false,
		"list_order": 118
	},
	{
		"id": "e20b05ad5eb54ab09b4a13d23e73fef0",
		"name": "Stretch",
		"display_name": "Stretch",
		"fitness_discipline": "stretching",
		"is_active": false,
		"list_order": 119
	},
	{
		"id": "2be6b4aa5a894761829d077fcdc4e0c3",
		"name": "Distance Walking",
		"display_name": "Distance",
		"fitness_discipline": "walking",
		"is_active": false,
		"list_order": 120
	},
	{
		"id": "0d7c84da75364e399fe3cb9c264c88a7",
		"name": "Low Intensity Running/Walking",
		"display_name": "Low Intensity",
		"fitness_discipline": "walking",
		"is_active": false,
		"list_order": 121
	},
	{
		"id": "d501bf75043547218531aff9277c49e3",
		"name": "OUTDOOR Power Walking",
		"display_name": "Power Walk",
		"fitness_discipline": "walking",
		"is_active": false,
		"list_order": 122
	},
	{
		"id": "6d010722eae2493eb93408ba559e7088",
		"name": "OUTDOOR Walk + Run",
		"display_name": "Walk + Run",
		"fitness_discipline": "walking",
		"is_active": false,
		"list_order": 123
	},
	{
		"id": "9a87e85d85c947c0bdb1388cd4d0a605",
		"name": "OUTDOOR Walk + Strength",
		"display_name": "Walk + Strength",
		"fitness_discipline": "walking",
		"is_active": false,
		"list_order": 124
	},
	{
		"id": "045a943d716040d685b8e812791be267",
		"name": "Walk + Strength",
		"display_name": "Walk + Strength",
		"fitness_discipline": "walking",
		"is_active": false,
		"list_order": 125
	},
	{
		"id": "d549728def544a848b2492a3afbd6971",
		"name": "Total Body Yoga",
		"display_name": "Total Body",
		"fitness_discipline": "yoga",
		"is_active": false,
		"list_order": 126
	},
	{
		"id": "1675982798a84c239c552b4cac158e41",
		"name": "Beginner Yoga",
		"display_name": "Beginner",
		"fitness_discipline": "yoga",
		"is_active": false,
		"list_order": 127
	},
	{
		"id": "991b662d3d384f1ebc403faef7088262",
		"name": "Evening Yoga",
		"display_name": "Evening",
		"fitness_discipline": "yoga",
		"is_active": false,
		"list_order": 128
	},
	{
		"id": "5cc79a3d63e64d1f96dac2f3e7ec728b",
		"name": "Morning Yoga",
		"display_name": "Morning",
		"fitness_discipline": "yoga",
		"is_active": false,
		"list_order": 129
	},
	{
		"id": "a5dc4597678247ac8053287ad81fa14c",
		"name": "Yoga",
		"display_name": "Yoga",
		"fitness_discipline": "yoga",
		"is_active": false,
		"list_order": 131
	},
	{
		"id": "e811d1b8b957496eb6bdd0f019855eab",
		"name": "Yoga on the Go",
		"display_name": "Yoga on the Go",
		"fitness_discipline": "yoga",
		"is_active": false,
		"list_order": 132
	},
	{
		"id": "57dbf6f9a4904a9f80e302380855bdb7",
		"name": "Warm Up/Cool Down",
		"display_name": "Warm Up/Cool Down",
		"fitness_discipline": "cycling",
		"is_active": false,
		"list_order": 133
	}

]

module.exports = classTypes;