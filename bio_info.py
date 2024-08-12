
# Step 1: Create a dictionary with your bio info
bio_info = {
    "name": "Kwaghfan Amos",
    "age": 35,
    "skills": ["Python", "Java", "C", "Go"]
}

# Step 2: Loop through the dictionary and print the values
for key, value in bio_info.items():
    if key == "skills":
        print("My Skills are:")
        for skill in value:
            print(f"- {skill}")
    else:
        print(f"My {key} is {value}.")
