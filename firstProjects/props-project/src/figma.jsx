function Figma() {
    const img='https://images.pexels.com/photos/19397660/pexels-photo-19397660/free-photo-of-reflection-of-a-brunette-woman-in-a-mirror.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load';
    return (
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src={img} alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption cl>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    )
}
export default Figma;