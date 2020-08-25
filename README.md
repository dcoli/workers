# Changes to make to test iframe communications

1. Set an ngrok to localhost:5500 for the parent, and another one for the child (so, two different subdomains).

2. Change the child iframe in index.html to point to the child ngrok address

3. Add JS to just parent.

4. Add text input to both parent and child.

5. Observe wups calls (probably one of them). `monitorEvents(document.body)`.

6. View playback in Analyst Station.

7. Add JS to parent and child as well.

8. Observe two wups calls.

9. See playback in Analyst Station.

Conclusion: each iframe is tracked separately with its own SID. The two sessions appear distinct in AS, and each shows only its iframe in the video playback. This is a job for secondary JS!

